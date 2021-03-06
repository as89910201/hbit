<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\Teacher;
use App\Models\Student;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Models\Advert;
use App\Models\Course;
use App\Models\Tags;
use App\Models\Campus;
use Illuminate\View\View;

class IndexController extends Controller
{
    public function __construct()
    {
        view()->composer('home.layouts.faculty','App\Http\Controllers\Home\IndexController@teacher');
        view()->composer('home.layouts.header','App\Http\Controllers\Home\NavController@header_nav');
        view()->composer('home.layouts.footer','App\Http\Controllers\Home\NavController@footer_link');
    }
    public function index(){

        $isMobile = $this->isMobile();

        if ($isMobile) {
            $student = new Student();
            $student_list = $student->getStudentSelect(4,2);
            $Article = new Article();
            $Article_list = $Article->getArticleSelect();

            $advert = new Advert();
            $rotation_chart = $advert->api_chart();
            return view('api/index',['student_list'=>$student_list,'article_list'=>$Article_list,'rotation_chart'=>$rotation_chart]);
        }

        $advert = new Advert();
        $rotation_chart = $advert->rotation_chart();
        $art = new Article;
        $art_java = $art->art_list(1);
        $art_php = $art->art_list(2);
        $art_html = $art->art_list(4);
        $art_Python = $art->art_list(5);
        $course = new Course();
        $course = $course->cou_index();
        return view('home/index',['rotation_chart'=>$rotation_chart,'course'=>$course,'art_java'=>$art_java,'art_php'=>$art_php,'art_html'=>$art_html,'art_Python'=>$art_Python]);
    }

    public function studentemployment(){
        $student = new Student();
        $data = $student->getStudentLimit(7);
        $advert = new Advert();
        $advert = $advert->getAdvert(2);
        return view('home/studentemployment',['student'=>$data,'advert'=>$advert]);
    }

    public function faculty(){
        $teacher = new Teacher();
        $data = $teacher->getTeacher();
        $isMobile = $this->isMobile();
        if ($isMobile) {
            return view('api/faculty',["teacher"=>$data]);
        } else {
            $advert = new Advert();
            $advert = $advert->getAdvert(1);
            $course = new Course();
            $course = $course->course();
            $Tags =Tags::allcount();
            $campus = Campus::getAllCampus();
            $courses = Course::getAllCourse();
            return view('home/faculty',['teacher'=>$data,'campus'=>$campus,'courses'=>$courses,'advert'=>$advert,'course'=>$course,'tags'=>$Tags]);
        }
    }
    public function teacher(View $view){
        $teacher = new Teacher();
        $data = $teacher->getTeacherLimit(5);
        $view->with(['data'=>$data]);
    }

    public function StudentsStory(Request $request){
        $student = new Student();
        $MaxPage = $student->MaxPage();
        $page = (int)$request->input('page') > 0 ? (int)$request->input('page') : 1;
        $page = $page > $MaxPage ? $MaxPage : $page;
        $isMobile = $this->isMobile();
        $data = $student->getStudentPage($page);
        if ($isMobile) {
            return view('api/StudentsStory',['student'=>$data]);
        }

        $advert = new Advert();
        $stu_story = $advert->getAdvert(3);
        return view('home/StudentsStory',['student'=>$data,'stu_story'=>$stu_story]);
    }

    public function EmploymentInformation(){
        $employment = new Student();
        $employment = $employment->Studentlist(20);
        $employment = $employment->toArray();
        foreach ($employment['data'] as $v){
            if(empty($v->name)){
                $strlen     = mb_strlen($v->name, 'utf-8');
                $firstStr     = mb_substr($v->name, 0, 1, 'utf-8');
                $lastStr     = mb_substr($v->name, -1, 1, 'utf-8');
                $v->name = $strlen == 2 ? $firstStr . str_repeat('*', mb_strlen($v->name, 'utf-8') - 1) : $firstStr . str_repeat("*", $strlen - 2) . $lastStr;
            }
        }
        return view("api/EmploymentInformation",['employment'=>$employment['data']]);
    }

    public function phonebd(){
        $campus = Campus::getAllCampus();
        $courses = Course::getAllCourse();
        return view("api/phonebd",['campus'=>$campus,'courses'=>$courses]);
    }
}

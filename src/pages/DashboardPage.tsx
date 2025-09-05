import { Calendar, Clock, Award, TrendingUp, Play, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";

const DashboardPage = () => {
  const enrolledCourses = courses.filter(course => course.isEnrolled);
  const completedLessons = enrolledCourses.reduce((total, course) => 
    total + (course.lessons?.filter(lesson => lesson.completed).length || 0), 0
  );
  const totalLessons = enrolledCourses.reduce((total, course) => 
    total + (course.lessons?.length || 0), 0
  );
  const averageProgress = enrolledCourses.reduce((total, course) => 
    total + (course.progress || 0), 0
  ) / enrolledCourses.length;

  const stats = [
    {
      title: "Enrolled Courses",
      value: enrolledCourses.length,
      icon: Calendar,
      description: "Active learning paths"
    },
    {
      title: "Completed Lessons", 
      value: completedLessons,
      icon: CheckCircle,
      description: `${totalLessons - completedLessons} remaining`
    },
    {
      title: "Learning Streak",
      value: "12 days",
      icon: TrendingUp,
      description: "Keep it up!"
    },
    {
      title: "Certificates",
      value: 2,
      icon: Award,
      description: "Earned this month"
    }
  ];

  const recentActivity = [
    { type: "completed", course: "Data Science with Python", lesson: "Machine Learning Intro", time: "2 hours ago" },
    { type: "started", course: "Mobile App Development", lesson: "Navigation Basics", time: "1 day ago" },
    { type: "completed", course: "Data Science with Python", lesson: "Data Visualization", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-xl text-muted-foreground">
            Continue your learning journey where you left off
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  Continue Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border border-border/50 rounded-lg p-4 hover:border-primary/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          by {course.instructor}
                        </p>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium text-primary">
                            {course.progress}%
                          </span>
                        </div>
                        <Progress value={course.progress} className="h-2 mb-3" />
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {course.category}
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="gradient"
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Overall Progress */}
          <div className="space-y-6">
            {/* Overall Progress */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Overall Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {Math.round(averageProgress)}%
                  </div>
                  <p className="text-sm text-muted-foreground">Average completion</p>
                </div>
                <Progress value={averageProgress} className="h-3 mb-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lessons completed</span>
                    <span className="font-medium">{completedLessons}/{totalLessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time invested</span>
                    <span className="font-medium">24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'completed' ? 'bg-success' : 'bg-primary'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          {activity.type === 'completed' ? 'Completed' : 'Started'}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.lesson} in {activity.course}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
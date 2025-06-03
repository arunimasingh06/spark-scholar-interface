
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, FileText, Check } from "lucide-react";

const TaskDetails = () => {
  const { id } = useParams();

  const task = {
    id: 1,
    title: "Complete Python Fundamentals Course",
    description: "Complete a comprehensive Python programming course covering variables, data types, control structures, functions, and object-oriented programming. This task is designed to establish a strong foundation in Python programming.",
    reward: 150,
    deadline: "2024-06-15",
    tags: ["Programming", "Python", "STEM"],
    difficulty: "Beginner",
    requirements: [
      "Complete all course modules (8 modules total)",
      "Pass final assessment with 80% or higher",
      "Submit certificate of completion",
      "Write a brief reflection (200-300 words) on key learnings"
    ],
    proofRequired: [
      "Course completion certificate",
      "Screenshot of final assessment score",
      "Reflection essay document"
    ],
    estimatedTime: "20-25 hours",
    category: "STEM",
    sponsor: "TechEd Foundation"
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/" className="text-spark-purple-400 hover:text-spark-purple-300 transition-colors">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{task.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {task.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-spark-blue-300 border-spark-blue-500/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-spark-purple-400 mb-2">${task.reward}</div>
            <Badge 
              variant="outline" 
              className={`${
                task.difficulty === 'Beginner' ? 'border-green-500/50 text-green-400' :
                task.difficulty === 'Intermediate' ? 'border-yellow-500/50 text-yellow-400' :
                'border-red-500/50 text-red-400'
              }`}
            >
              {task.difficulty}
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="glass-card p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-spark-purple-400" />
              <div>
                <div className="text-sm text-muted-foreground">Deadline</div>
                <div className="font-semibold">Jun 15, 2024</div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-spark-blue-400" />
              <div>
                <div className="text-sm text-muted-foreground">Est. Time</div>
                <div className="font-semibold">{task.estimatedTime}</div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-green-400" />
              <div>
                <div className="text-sm text-muted-foreground">Category</div>
                <div className="font-semibold">{task.category}</div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-4">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-yellow-400" />
              <div>
                <div className="text-sm text-muted-foreground">Sponsor</div>
                <div className="font-semibold text-sm">{task.sponsor}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-4">Task Description</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {task.description}
            </p>
            
            <Separator className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="space-y-3">
              {task.requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-spark rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Required Proof of Completion</h3>
            <ul className="space-y-3">
              {task.proofRequired.map((proof, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-spark-blue-400 mt-0.5" />
                  <span className="text-muted-foreground">{proof}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Action Panel */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Take Action</h3>
            <div className="space-y-4">
              <Button className="w-full bg-gradient-spark hover:shadow-spark" size="lg" asChild>
                <Link to={`/submission/${task.id}`}>Start Task</Link>
              </Button>
              <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                Save for Later
              </Button>
              <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
                Share Task
              </Button>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-spark-purple-400 mb-2">0%</div>
                <div className="text-sm text-muted-foreground">Task Completion</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-spark h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="text-xs text-muted-foreground text-center">
                Start the task to begin tracking your progress
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Similar Tasks</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="font-medium mb-1">JavaScript Basics</div>
                <div className="text-sm text-spark-purple-400">$120</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="font-medium mb-1">Web Development Course</div>
                <div className="text-sm text-spark-purple-400">$200</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="font-medium mb-1">SQL Database Design</div>
                <div className="text-sm text-spark-purple-400">$180</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;


import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Users, FileText, ArrowUp } from "lucide-react";

const SponsorDashboard = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [reward, setReward] = useState("");
  const [category, setCategory] = useState("");

  const activeTasks = [
    {
      id: 1,
      title: "Python Fundamentals Course",
      category: "STEM",
      reward: 150,
      participants: 45,
      completed: 23,
      status: "active"
    },
    {
      id: 2,
      title: "Technical Blog Writing",
      category: "Writing",
      reward: 200,
      participants: 32,
      completed: 18,
      status: "active"
    },
    {
      id: 3,
      title: "Data Analysis Project",
      category: "STEM",
      reward: 300,
      participants: 28,
      completed: 12,
      status: "active"
    }
  ];

  const stats = {
    totalFunded: 15000,
    activeHires: 105,
    completedTasks: 78,
    averageCompletion: 82
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-spark-purple-400 to-spark-blue-400 bg-clip-text text-transparent mb-2">
          Sponsor Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Create learning opportunities and track student impact
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Funded</p>
              <p className="text-3xl font-bold text-spark-purple-400">${stats.totalFunded.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-spark-purple-500/20 to-spark-purple-600/20 rounded-xl flex items-center justify-center">
              <ArrowUp className="h-6 w-6 text-spark-purple-400" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Participants</p>
              <p className="text-3xl font-bold text-spark-blue-400">{stats.activeHires}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-spark-blue-500/20 to-spark-blue-600/20 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-spark-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completed Tasks</p>
              <p className="text-3xl font-bold text-green-400">{stats.completedTasks}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
              <p className="text-3xl font-bold text-yellow-400">{stats.averageCompletion}%</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-lg">📊</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Task Creation Form */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-6">
              <PlusCircle className="h-6 w-6 text-spark-purple-400" />
              <h2 className="text-2xl font-bold">Create New Task</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Task Title</label>
                <Input
                  placeholder="e.g., Complete Machine Learning Course"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="bg-white/5 border-white/20"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="bg-white/5 border-white/20">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/20">
                    <SelectItem value="stem">STEM</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Reward Amount ($)</label>
                <Input
                  type="number"
                  placeholder="150"
                  value={reward}
                  onChange={(e) => setReward(e.target.value)}
                  className="bg-white/5 border-white/20"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Task Description</label>
                <Textarea
                  placeholder="Describe the learning objectives, requirements, and expected outcomes..."
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="min-h-[120px] bg-white/5 border-white/20 resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-spark hover:shadow-spark">
                Create Task
              </Button>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Impact Preview</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-spark-purple-500/10 to-spark-blue-500/10 border border-white/10">
                <div className="text-2xl font-bold text-spark-purple-400 mb-1">Est. 40-60</div>
                <div className="text-sm text-muted-foreground">Expected participants</div>
              </div>
              <Separator className="bg-white/10" />
              <div className="text-sm text-muted-foreground">
                Based on similar tasks in this category and reward range
              </div>
            </div>
          </Card>
        </div>

        {/* Active Tasks */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-6">Active Tasks</h2>
            <div className="space-y-4">
              {activeTasks.map((task) => (
                <div key={task.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{task.title}</h3>
                      <Badge variant="secondary" className="bg-white/10 text-spark-blue-300 border-spark-blue-500/30">
                        {task.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-spark-purple-400">${task.reward}</div>
                      <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Participants: </span>
                      <span className="font-semibold">{task.participants}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Completed: </span>
                      <span className="font-semibold text-green-400">{task.completed}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-spark h-2 rounded-full" 
                        style={{ width: `${(task.completed / task.participants) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {Math.round((task.completed / task.participants) * 100)}% completion rate
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Sarah completed Python Fundamentals</div>
                  <div className="text-xs text-muted-foreground">2 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">5 new participants joined Data Analysis</div>
                  <div className="text-xs text-muted-foreground">4 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <PlusCircle className="h-4 w-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">New task "Web Development" created</div>
                  <div className="text-xs text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SponsorDashboard;

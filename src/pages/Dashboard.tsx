
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowUp, Check } from "lucide-react";

const Dashboard = () => {
  const recommendedTasks = [
    {
      id: 1,
      title: "Complete Python Fundamentals Course",
      reward: 150,
      tags: ["Programming", "Python", "STEM"],
      difficulty: "Beginner",
      deadline: "5 days left"
    },
    {
      id: 2,
      title: "Write Technical Blog Post",
      reward: 200,
      tags: ["Writing", "Tech", "Communication"],
      difficulty: "Intermediate",
      deadline: "3 days left"
    },
    {
      id: 3,
      title: "Data Analysis Project",
      reward: 300,
      tags: ["Data Science", "Analytics", "STEM"],
      difficulty: "Advanced",
      deadline: "1 week left"
    }
  ];

  const currentTasks = [
    { name: "React Component Library", progress: 75, reward: 250 },
    { name: "Machine Learning Course", progress: 40, reward: 400 }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2450, avatar: "AC" },
    { rank: 2, name: "Maria Garcia", points: 2380, avatar: "MG" },
    { rank: 3, name: "You", points: 2100, avatar: "YU" },
    { rank: 4, name: "David Kim", points: 1950, avatar: "DK" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-spark-purple-400 to-spark-blue-400 bg-clip-text text-transparent">
          Welcome back, Alex
        </h1>
        <p className="text-muted-foreground text-lg">
          Continue your learning journey and earn rewards
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <p className="text-3xl font-bold text-spark-purple-400">$2,450</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-spark-purple-500/20 to-spark-purple-600/20 rounded-xl flex items-center justify-center">
              <ArrowUp className="h-6 w-6 text-spark-purple-400" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completed Tasks</p>
              <p className="text-3xl font-bold text-spark-blue-400">23</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-spark-blue-500/20 to-spark-blue-600/20 rounded-xl flex items-center justify-center">
              <Check className="h-6 w-6 text-spark-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Tasks</p>
              <p className="text-3xl font-bold text-foreground">2</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
              <p className="text-3xl font-bold text-foreground">#3</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-lg">🏆</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recommended Tasks</h2>
            <Button variant="ghost" className="text-spark-purple-400 hover:text-spark-purple-300">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recommendedTasks.map((task) => (
              <Card key={task.id} className="glass-card p-6 hover-scale group cursor-pointer">
                <Link to={`/task/${task.id}`} className="block">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-spark-purple-400 transition-colors">
                        {task.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {task.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/10 text-spark-blue-300 border-spark-blue-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-spark-purple-400">${task.reward}</div>
                      <div className="text-sm text-muted-foreground">{task.deadline}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
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
                    <Button size="sm" className="bg-gradient-spark hover:shadow-spark">
                      Start Task
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current Tasks Progress */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Current Tasks</h3>
            <div className="space-y-4">
              {currentTasks.map((task, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{task.name}</span>
                    <span className="text-sm text-spark-purple-400">${task.reward}</span>
                  </div>
                  <Progress value={task.progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{task.progress}% complete</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Wallet Balance */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Wallet Balance</h3>
            <div className="text-3xl font-bold text-spark-blue-400 mb-4">$1,250.00</div>
            <Button className="w-full bg-gradient-spark hover:shadow-spark" asChild>
              <Link to="/wallet">Manage Wallet</Link>
            </Button>
          </Card>

          {/* Leaderboard Preview */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div key={user.rank} className={`flex items-center justify-between p-3 rounded-lg ${
                  user.name === 'You' ? 'bg-gradient-spark/20 border border-spark-purple-500/30' : 'hover:bg-white/5'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-spark-purple-500 to-spark-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                      {user.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">#{user.rank}</div>
                    </div>
                  </div>
                  <div className="text-spark-purple-400 font-semibold">{user.points}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

const Submission = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const [plagiarismScore] = useState(92); // Mock score
  const [semanticMatch] = useState(88); // Mock score

  const task = {
    title: "Complete Python Fundamentals Course",
    reward: 150,
    requirements: [
      "Course completion certificate",
      "Screenshot of final assessment score",
      "Reflection essay document"
    ]
  };

  const handleFileUpload = (fileName: string) => {
    setFiles([...files, fileName]);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to={`/task/${id}`} className="text-spark-purple-400 hover:text-spark-purple-300 transition-colors">
          ← Back to Task Details
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Submit Your Work</h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-lg">{task.title}</p>
          <div className="text-2xl font-bold text-spark-purple-400">${task.reward}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submission Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* File Upload */}
          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-4">Upload Required Files</h2>
            <div className="space-y-4">
              {task.requirements.map((req, index) => (
                <div key={index} className="border border-dashed border-white/20 rounded-lg p-6 hover:border-spark-purple-400/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{req}</span>
                    {files.includes(req) && <CheckCircle className="h-5 w-5 text-green-400" />}
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/20"
                      onClick={() => handleFileUpload(req)}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                    {files.includes(req) && (
                      <span className="text-sm text-green-400 flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        File uploaded
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Description */}
          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-4">Description & Reflection</h2>
            <Textarea
              placeholder="Describe your learning experience and key takeaways from completing this task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[200px] bg-white/5 border-white/20 resize-none"
            />
            <div className="mt-2 text-sm text-muted-foreground">
              {description.length}/500 characters
            </div>
          </Card>

          {/* AI Analysis */}
          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-4">AI Quality Analysis</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Plagiarism Check</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 font-bold">{plagiarismScore}%</span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                </div>
                <Progress value={plagiarismScore} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Original content detected
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Semantic Match</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-spark-blue-400 font-bold">{semanticMatch}%</span>
                    {semanticMatch >= 80 ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-400" />
                    )}
                  </div>
                </div>
                <Progress value={semanticMatch} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Content relevance to task requirements
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Submission Panel */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Submission Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Files Uploaded</span>
                <Badge variant={files.length === task.requirements.length ? "default" : "secondary"}>
                  {files.length}/{task.requirements.length}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Description</span>
                <Badge variant={description.length > 50 ? "default" : "secondary"}>
                  {description.length > 50 ? "Complete" : "Pending"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>AI Analysis</span>
                <Badge variant="default">
                  Passed
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Ready to Submit?</h3>
            <div className="space-y-4">
              <Button 
                className="w-full bg-gradient-spark hover:shadow-spark" 
                size="lg"
                disabled={files.length !== task.requirements.length || description.length < 50}
              >
                Submit for Review
              </Button>
              <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                Save Draft
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="mb-2">After submission:</p>
              <ul className="space-y-1 text-xs">
                <li>• Review typically takes 24-48 hours</li>
                <li>• You'll receive email notification</li>
                <li>• Rewards are processed automatically</li>
              </ul>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Task Overview</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-spark-purple-400 mb-2">${task.reward}</div>
              <div className="text-sm text-muted-foreground mb-4">Reward Amount</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-spark h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <div className="text-xs text-muted-foreground">95% Complete</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Submission;

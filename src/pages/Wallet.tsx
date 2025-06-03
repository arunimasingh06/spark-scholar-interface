
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, ArrowDown, Wallet as WalletIcon, Check } from "lucide-react";

const Wallet = () => {
  const transactions = [
    {
      id: 1,
      type: "earned",
      amount: 150,
      description: "Python Fundamentals Course",
      date: "2024-06-01",
      status: "completed"
    },
    {
      id: 2,
      type: "earned",
      amount: 200,
      description: "Technical Blog Post",
      date: "2024-05-28",
      status: "completed"
    },
    {
      id: 3,
      type: "withdrawal",
      amount: -100,
      description: "PayPal Withdrawal",
      date: "2024-05-25",
      status: "completed"
    },
    {
      id: 4,
      type: "earned",
      amount: 300,
      description: "Data Analysis Project",
      date: "2024-05-20",
      status: "completed"
    },
    {
      id: 5,
      type: "earned",
      amount: 125,
      description: "React Component Library",
      date: "2024-05-15",
      status: "pending"
    }
  ];

  const totalEarnings = 2450;
  const availableBalance = 1250;
  const pendingRewards = 325;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-spark-purple-400 to-spark-blue-400 bg-clip-text text-transparent mb-2">
          Wallet
        </h1>
        <p className="text-muted-foreground text-lg">
          Manage your earnings and withdrawals
        </p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-spark-purple-500/20 to-spark-purple-600/20 rounded-xl flex items-center justify-center">
              <WalletIcon className="h-6 w-6 text-spark-purple-400" />
            </div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
              Available
            </Badge>
          </div>
          <div className="text-3xl font-bold text-spark-purple-400 mb-1">${availableBalance}</div>
          <div className="text-sm text-muted-foreground">Available Balance</div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-spark-blue-500/20 to-spark-blue-600/20 rounded-xl flex items-center justify-center">
              <ArrowUp className="h-6 w-6 text-spark-blue-400" />
            </div>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              Total
            </Badge>
          </div>
          <div className="text-3xl font-bold text-spark-blue-400 mb-1">${totalEarnings}</div>
          <div className="text-sm text-muted-foreground">Total Earnings</div>
        </Card>

        <Card className="glass-card p-6 hover-scale">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
              <ArrowDown className="h-6 w-6 text-yellow-400" />
            </div>
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              Pending
            </Badge>
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-1">${pendingRewards}</div>
          <div className="text-sm text-muted-foreground">Pending Rewards</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transaction History */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Transaction History</h2>
              <Button variant="outline" className="border-white/20">
                Export
              </Button>
            </div>
            
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'earned' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {transaction.type === 'earned' ? (
                        <ArrowUp className="h-5 w-5" />
                      ) : (
                        <ArrowDown className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.description}</div>
                      <div className="text-sm text-muted-foreground">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                    </div>
                    <Badge 
                      variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                      className={transaction.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Withdrawal Panel */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Withdrawal</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">PayPal</span>
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div className="text-sm text-muted-foreground">john@example.com</div>
              </div>
              
              <Button className="w-full bg-gradient-spark hover:shadow-spark">
                Withdraw $1,250
              </Button>
              
              <div className="text-xs text-muted-foreground">
                • Minimum withdrawal: $50
                • Processing time: 1-3 business days
                • No withdrawal fees
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-bold">
                    P
                  </div>
                  <span>PayPal</span>
                </div>
                <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Active
                </Badge>
              </div>
              
              <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                Add Payment Method
              </Button>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Earning Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">This Month</span>
                <span className="font-semibold text-green-400">+$650</span>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tasks Completed</span>
                <span className="font-semibold">23</span>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg. per Task</span>
                <span className="font-semibold text-spark-purple-400">$107</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

import { Dumbbell, TrendingUp, Calendar, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back! 💪</h1>
                        <p className="text-muted-foreground">Ready to crush today&apos;s workout?</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Dumbbell className="w-6 h-6 text-primary" />
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            FITVORA
                        </span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-4">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Current Weight
                            </CardTitle>
                            <TrendingUp className="w-4 h-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">70 kg</div>
                            <p className="text-xs text-muted-foreground">-2kg from start</p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Workouts This Week
                            </CardTitle>
                            <Dumbbell className="w-4 h-4 text-secondary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">4/5</div>
                            <p className="text-xs text-muted-foreground">1 more to go!</p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Streak
                            </CardTitle>
                            <Calendar className="w-4 h-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12 days</div>
                            <p className="text-xs text-muted-foreground">Keep it up!</p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Goal Progress
                            </CardTitle>
                            <Target className="w-4 h-4 text-secondary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">68%</div>
                            <p className="text-xs text-muted-foreground">On track</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Today's Workout */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Today&apos;s Workout</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-background/50">
                            <div>
                                <h3 className="font-semibold">Upper Body Strength</h3>
                                <p className="text-sm text-muted-foreground">45 minutes • 8 exercises</p>
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Start Workout
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3">
                            {["Bench Press", "Pull-ups", "Shoulder Press"].map((exercise) => (
                                <div
                                    key={exercise}
                                    className="p-4 rounded-lg border border-border/50 bg-background/30"
                                >
                                    <p className="font-medium">{exercise}</p>
                                    <p className="text-sm text-muted-foreground">3 sets × 10 reps</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer">
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-2">Log Progress</h3>
                            <p className="text-sm text-muted-foreground">
                                Update your weight and measurements
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer">
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-2">Upload Photo</h3>
                            <p className="text-sm text-muted-foreground">
                                Track your transformation visually
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer">
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-2">View Reports</h3>
                            <p className="text-sm text-muted-foreground">
                                See your progress analytics
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

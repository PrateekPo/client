"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dumbbell, ChevronRight, ChevronLeft, Calendar, Weight, Ruler, User, Target, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type OnboardingData = {
    dateOfBirth: string;
    weight: string;
    height: string;
    gender: "male" | "female" | "other" | "";
    goal: "lose_weight" | "gain_muscle" | "maintain" | "improve_endurance" | "";
    environment: "gym" | "home" | "both" | "";
};

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<OnboardingData>({
        dateOfBirth: "",
        weight: "",
        height: "",
        gender: "",
        goal: "",
        environment: "",
    });

    const totalSteps = 3;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            // Save data and redirect to dashboard
            console.log("Onboarding data:", formData);
            router.push("/home");
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const isStepValid = () => {
        switch (step) {
            case 1:
                return formData.dateOfBirth && formData.weight && formData.height && formData.gender;
            case 2:
                return formData.goal;
            case 3:
                return formData.environment;
            default:
                return false;
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

            <div className="relative w-full max-w-2xl">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <Dumbbell className="w-8 h-8 text-primary" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        FITVORA
                    </span>
                </div>

                {/* Progress Indicator */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`flex-1 h-2 rounded-full mx-1 transition-all ${s <= step ? "bg-primary" : "bg-border"
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Step {step} of {totalSteps}
                    </p>
                </div>

                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            {step === 1 && "Tell us about yourself"}
                            {step === 2 && "What's your fitness goal?"}
                            {step === 3 && "Where do you workout?"}
                        </CardTitle>
                        <CardDescription>
                            {step === 1 && "We'll use this to personalize your experience"}
                            {step === 2 && "We'll create a customized plan for you"}
                            {step === 3 && "This helps us suggest the right exercises"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="dob"
                                            type="date"
                                            className="pl-10"
                                            value={formData.dateOfBirth}
                                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="weight">Weight (kg)</Label>
                                        <div className="relative">
                                            <Weight className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="weight"
                                                type="number"
                                                placeholder="70"
                                                className="pl-10"
                                                value={formData.weight}
                                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="height">Height (cm)</Label>
                                        <div className="relative">
                                            <Ruler className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="height"
                                                type="number"
                                                placeholder="175"
                                                className="pl-10"
                                                value={formData.height}
                                                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Gender</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { value: "male", label: "Male" },
                                            { value: "female", label: "Female" },
                                            { value: "other", label: "Other" },
                                        ].map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, gender: option.value as any })}
                                                className={`p-4 rounded-lg border-2 transition-all ${formData.gender === option.value
                                                        ? "border-primary bg-primary/10"
                                                        : "border-border hover:border-primary/50"
                                                    }`}
                                            >
                                                <User className="w-6 h-6 mx-auto mb-2" />
                                                <p className="text-sm font-medium">{option.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Fitness Goal */}
                        {step === 2 && (
                            <div className="space-y-3">
                                {[
                                    { value: "lose_weight", label: "Lose Weight", icon: Target },
                                    { value: "gain_muscle", label: "Gain Muscle", icon: Dumbbell },
                                    { value: "maintain", label: "Maintain Fitness", icon: Target },
                                    { value: "improve_endurance", label: "Improve Endurance", icon: Target },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, goal: option.value as any })}
                                        className={`w-full p-6 rounded-lg border-2 transition-all flex items-center gap-4 ${formData.goal === option.value
                                                ? "border-primary bg-primary/10"
                                                : "border-border hover:border-primary/50"
                                            }`}
                                    >
                                        <option.icon className="w-8 h-8 text-primary" />
                                        <span className="text-lg font-medium">{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Step 3: Workout Environment */}
                        {step === 3 && (
                            <div className="space-y-3">
                                {[
                                    { value: "gym", label: "Gym", description: "Access to gym equipment" },
                                    { value: "home", label: "Home", description: "Bodyweight & minimal equipment" },
                                    { value: "both", label: "Both", description: "Mix of gym and home workouts" },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, environment: option.value as any })}
                                        className={`w-full p-6 rounded-lg border-2 transition-all ${formData.environment === option.value
                                                ? "border-primary bg-primary/10"
                                                : "border-border hover:border-primary/50"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <HomeIcon className="w-8 h-8 text-primary" />
                                            <div className="text-left">
                                                <p className="text-lg font-medium">{option.label}</p>
                                                <p className="text-sm text-muted-foreground">{option.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-3 pt-4">
                            {step > 1 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleBack}
                                    className="flex-1"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    Back
                                </Button>
                            )}
                            <Button
                                type="button"
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                {step === totalSteps ? "Complete" : "Next"}
                                {step < totalSteps && <ChevronRight className="w-4 h-4 ml-2" />}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

import { useNavigate } from "react-router"; 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ChevronRight } from 'lucide-react';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"; 

const formSchema = z
    .object({
        email: z.string().email("올바른 형식의 이메일 주소를 입력해주세요."),
        password: z.string().min(8, {
            message: "비밀번호는 최소 8자 이상이어야 합니다.",
        }),
        confirmPassword: z.string().min(1, { 
            message: "비밀번호 확인을 입력해주세요.",
        }),
        terms1: z.boolean().default(false),
        terms2: z.boolean().default(false),
        terms3: z.boolean().default(false).optional(),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                code: "custom",
                message: "비밀번호가 일치하지 않습니다.",
                path: ["confirmPassword"],
            });
        }
        if (!data.terms1 || !data.terms2) {
             ctx.addIssue({
                code: "custom",
                message: "필수 이용약관에 동의해야 합니다.",
                path: ["terms1"],
            });
        }
    });

type FormValues = z.infer<typeof formSchema>;


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            terms1: false,
            terms2: false,
            terms3: false,
        },
    });

    const navigate = useNavigate();

    const onSubmit = async (values: FormValues) => {
        console.log("회원가입 시도 데이터:", values);

        if (!values.terms1 || !values.terms2) {
             toast.warning("잠깐! 필수 동의가 아직 완료되지 않았어요!");
             return;
        }
        
        if (values.email && values.password) {
             toast.success("회원가입 요청을 완료하였습니다.");
             navigate("/login"); 
        }
    };


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="border-0 bg-transparent/30 backdrop-blur-xl shadow-2xl">
                <CardHeader className="text-start">
                    <CardTitle className="text-xl font-bold text-white">회원가입</CardTitle>
                    <CardDescription className="text-gray-400">
                        회원가입을 위한 정보를 입력해주세요.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-4"> 
                                
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="email" className="text-white">
                                                <span className="text-red-500">*</span> 이메일
                                            </FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="이메일을 입력하세요."
                                                        className="bg-zinc-800 border-zinc-700 text-white flex-1"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <Button 
                                                    type="button" 
                                                    variant="outline"
                                                    className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                                                >
                                                    본인 인증
                                                </Button>
                                            </div>
                                            <FormMessage className="text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="password" className="text-white">
                                                <span className="text-red-500">*</span> 비밀번호
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="password" 
                                                    type="password" 
                                                    placeholder="비밀번호를 입력하세요."
                                                    className="bg-zinc-800 border-zinc-700 text-white"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="password-confirm" className="text-white">
                                                <span className="text-red-500">*</span> 비밀번호 확인
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="password-confirm" 
                                                    type="password" 
                                                    placeholder="비밀번호 확인을 입력하세요."
                                                    className="bg-zinc-800 border-zinc-700 text-white"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-4">
                                    <FormLabel className="text-white">
                                        <span className="text-red-500">*</span> 필수 동의항목
                                    </FormLabel>
                                    <div className="flex flex-col gap-3 mt-2">
                                        
                                        <FormField
                                            control={form.control}
                                            name="terms1"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center justify-between space-y-0">
                                                    <div className="flex items-center gap-2">
                                                        <FormControl>
                                                            <Checkbox 
                                                                id="terms1" 
                                                                className="bg-zinc-800 border-zinc-700"
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </FormControl>
                                                        <FormLabel htmlFor="terms1" className="text-white text-sm cursor-pointer !m-0">
                                                            서비스 이용약관 동의
                                                        </FormLabel>
                                                    </div>
                                                    <Button 
                                                        type="button" 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="text-white hover:text-gray-300 p-0 h-auto"
                                                    >
                                                        자세히 <ChevronRight size={16} />
                                                    </Button>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="terms2"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center justify-between space-y-0">
                                                    <div className="flex items-center gap-2">
                                                        <FormControl>
                                                            <Checkbox 
                                                                id="terms2" 
                                                                className="bg-zinc-800 border-zinc-700"
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </FormControl>
                                                        <FormLabel htmlFor="terms2" className="text-white text-sm cursor-pointer !m-0">
                                                            개인정보 수집 및 이용동의
                                                        </FormLabel>
                                                    </div>
                                                    <Button 
                                                        type="button" 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="text-white hover:text-gray-300 p-0 h-auto"
                                                    >
                                                        자세히 <ChevronRight size={16} />
                                                    </Button>
                                                </FormItem>
                                            )}
                                        />
                                        
                                        {form.formState.errors.terms1 && form.formState.errors.terms1.type === 'custom' && (
                                            <p className="text-red-400 text-sm mt-1">
                                                {form.formState.errors.terms1.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <Separator className="bg-gray-700" />

                                <div className="space-y-4">
                                    <FormLabel className="text-white">선택 동의항목</FormLabel>
                                    <FormField
                                        control={form.control}
                                        name="terms3"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center justify-between space-y-0 mt-2">
                                                <div className="flex items-center gap-2">
                                                    <FormControl>
                                                        <Checkbox 
                                                            id="terms3" 
                                                            className="bg-zinc-800 border-zinc-700"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormLabel htmlFor="terms3" className="text-white text-sm cursor-pointer !m-0">
                                                        마케팅 및 광고 수신 동의
                                                    </FormLabel>
                                                </div>
                                                <Button 
                                                    type="button" 
                                                    variant="ghost" 
                                                    size="sm"
                                                    className="text-white hover:text-gray-300 p-0 h-auto"
                                                >
                                                    자세히 <ChevronRight size={16} />
                                                </Button>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex gap-3">
                                        <a href="/login">
                                        <Button 
                                            type="button" 
                                            variant="outline"
                                            className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                                        >
                                            <ArrowLeft size={20} />
                                        </Button>
                                        </a>
                                        <Button 
                                        type="submit" 
                                        className="flex-1 text-white"
                                        style={{ backgroundColor: '#15803d' }}
                                        disabled={form.formState.isSubmitting}
                                        >
                                        회원가입
                                        </Button>
                                    </div>
                                    <p className="text-center text-gray-400">
                                        이미 계정이 있으신가요? <a href="/login" className="text-blue-400 cursor-pointer hover:underline">로그인</a>
                                    </p>
                                </div>

                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
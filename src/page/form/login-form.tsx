import { Link } from "react-router";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    email: z.string().email("올바른 형식의 이메일 주소를 입력해주세요."),
    password: z.string().min(8, {
        message: "비밀번호는 최소한 8자 이상으로 작성해주세요.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const navigate = useNavigate();

    const onSubmit = async (values: FormValues) => {
        console.log("로그인 시도 데이터:", values);
    };

    return (
        <div className="w-full max-w-[1328px] h-full flex items-center justify-center">
            <Card className="w-full max-w-sm border-0 bg-transparent ">
                <CardHeader className="text-start">
                    <CardTitle className="text-xl font-bold text-white">로그인</CardTitle>
                    <CardDescription className="text-gray-400">로그인을 위한 정보를 입력해주세요.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-3">
                                <Button variant="outline" type="button" className="border-none w-full" style={{ backgroundColor: "#03C75A", color: "#000" }}>
                                    네이버 로그인
                                </Button>
                                <Button variant="outline" type="button" className="border-none w-full" style={{ backgroundColor: "#FEE500", color: "#000" }}>
                                    카카오 로그인
                                </Button>
                                <Button variant="outline" type="button" className="border-none w-full" style={{ backgroundColor: "#444", color: "#fff" }}>
                                    구글 로그인
                                </Button>
                            </div>

                            <div className="relative flex justify-center items-center py-2">
                                <div className="absolute inset-x-0 h-[1px] bg-gray-600"></div>
                                <div className="relative bg-black text-gray-400 px-3 text-sm z-10">OR CONTINUE WITH</div>
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email" className="text-white">
                                            이메일
                                        </FormLabel>
                                        <FormControl>
                                            <Input id="email" type="email" placeholder="이메일을 입력하세요." className="bg-zinc-800 border-zinc-700 text-white" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center">
                                            <FormLabel htmlFor="password" className="text-white">
                                                비밀번호
                                            </FormLabel>
                                            <a href="#" className="ml-auto text-sm text-white cursor-pointer hover:underline">
                                                비밀번호를 잊으셨나요?
                                            </a>
                                        </div>
                                        <FormControl>
                                            <Input id="password" type="password" placeholder="비밀번호를 입력하세요." className="bg-zinc-800 border-zinc-700 text-white" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4 pt-2">
                                <Button type="submit" className="w-full text-white" style={{ backgroundColor: "#0c4a6e" }} disabled={form.formState.isSubmitting}>
                                    로그인
                                </Button>
                                <div className="text-center text-gray-400">
                                    계정이 없으신가요?
                                    <Link to="/sign-up" className="text-white cursor-pointer hover:underline ml-1">
                                        회원가입
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

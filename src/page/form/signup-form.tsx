import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ChevronRight } from 'lucide-react';

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-0 bg-transparent backdrop-blur-sm">
        <CardHeader className="text-start">
          <CardTitle className="text-xl font-bold text-white">회원가입</CardTitle>
          <CardDescription className="text-gray-400">
            회원가입을 위한 정보를 입력해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              {/* 이메일 */}
              <Field>
                <FieldLabel htmlFor="email" className="text-white">
                  <span className="text-red-500">*</span> 이메일
                </FieldLabel>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요."
                    className="bg-zinc-800 border-zinc-700 text-white flex-1"
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                  >
                    본인 인증
                  </Button>
                </div>
              </Field>

              {/* 비밀번호 */}
              <Field>
                <FieldLabel htmlFor="password" className="text-white">
                  <span className="text-red-500">*</span> 비밀번호
                </FieldLabel>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="비밀번호를 입력하세요."
                  className="bg-zinc-800 border-zinc-700 text-white"
                  required 
                />
              </Field>

              {/* 비밀번호 확인 */}
              <Field>
                <FieldLabel htmlFor="password-confirm" className="text-white">
                  <span className="text-red-500">*</span> 비밀번호 확인
                </FieldLabel>
                <Input 
                  id="password-confirm" 
                  type="password" 
                  placeholder="비밀번호 확인을 입력하세요."
                  className="bg-zinc-800 border-zinc-700 text-white"
                  required 
                />
              </Field>

              {/* 필수 동의항목 */}
              <Field>
                <FieldLabel className="text-white">
                  <span className="text-red-500">*</span> 필수 동의항목
                </FieldLabel>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms1" className="bg-zinc-800 border-zinc-700" />
                      <label htmlFor="terms1" className="text-white text-sm cursor-pointer">
                        서비스 이용약관 동의
                      </label>
                    </div>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      className="text-white hover:text-gray-300 p-0 h-auto"
                    >
                      자세히 <ChevronRight size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms2" className="bg-zinc-800 border-zinc-700" />
                      <label htmlFor="terms2" className="text-white text-sm cursor-pointer">
                        개인정보 수집 및 이용동의
                      </label>
                    </div>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      className="text-white hover:text-gray-300 p-0 h-auto"
                    >
                      자세히 <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </Field>

              <Separator className="bg-gray-700" />

              {/* 선택 동의항목 */}
              <Field>
                <FieldLabel className="text-white">선택 동의항목</FieldLabel>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms3" className="bg-zinc-800 border-zinc-700" />
                    <label htmlFor="terms3" className="text-white text-sm cursor-pointer">
                      마케팅 및 광고 수신 동의
                    </label>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    className="text-white hover:text-gray-300 p-0 h-auto"
                  >
                    자세히 <ChevronRight size={16} />
                  </Button>
                </div>
              </Field>

              {/* 버튼 영역 */}
                <Field>
                <div className="flex gap-3 mt-4">
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
                    >
                    회원가입
                    </Button>
                </div>
                <FieldDescription className="text-center text-gray-400 mt-4">
                    이미 계정이 있으신가요? <a href="/login" className="text-blue-400 cursor-pointer">로그인</a>
                </FieldDescription>
                </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
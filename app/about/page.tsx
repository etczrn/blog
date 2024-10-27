import { H1, H2, H3, H4 } from '@/app/components/ui/typography';

import { FlipWords } from '@/app/components/ui/flip-words';
import { HTMLElementProps } from '@/app/components/ui/types';
import { cn } from '@/app/lib/utils';
import Image from 'next/image';

export default function About() {
  const words = ['베스트 프랙티스를 좇는', '사용자 경험을 중요하게 생각하는'];

  return (
    <>
      <Section>
        <H1>김수연</H1>
        <div>
          <span className="block">저는</span>
          <FlipWords words={words} />
          <span className="block">개발자입니다.</span>
        </div>
        <Image alt="me" src={'/me.jpg'} width={200} height={200} />
      </Section>
      <Section>
        <H2>work experience</H2>
        <article className="grid grid-cols-3 gap-x-4 my-4">
          <div className="col-span-1">
            <H3>Finddy Inc.</H3>
            <p>Tech lab. / 팀원</p>
            <p>2022.09 - 2024.10</p>
          </div>
          <div className="col-span-2">
            <H4>어카운즈 어드민 시스템 개발</H4>
            <ul>
              <li>
                간편송금 앱 어카운즈의 어드민 서비스 웹 프론트엔드 개발 담당
              </li>
              <li>
                프로젝트 구조 설계, AWS 배포 및 CodePipeline을 통한 CI/CD 설정
                수행
              </li>
              <li>
                유저 관리, 금융거래 내역 조회, 공지사항 관리 등 주요 기능 개발을
                통해 서비스 운영 효율성 및 사용자 경험 개선에 기여
              </li>
              <li>
                최신 기술 도입과 유지보수성 향상을 위해 React Router v6를
                Tanstack Router로 리팩토링하여 타입 안전성과 개발 생산성을 높임
              </li>
              <li>
                사용기술: React, TypeScript, MUI, React Query, Tanstack Router,
                Context API
              </li>
            </ul>
            <H4>
              <a href="https://accounz.io/" target="_blank">
                어카운즈 홈페이지
              </a>{' '}
              개발
            </H4>
            <ul>
              <li>
                랜딩 페이지와 공지사항, FAQ, 이용약관 등 웹 프론트엔드 개발 담당
              </li>
              <li>
                사용자 인터랙션을 강화하기 위해 GSAP을 활용하여 애니메이션
                구현하고 사용자 경험 향상
              </li>
              <li>사용기술: React, TypeScript, React Query, GSAP</li>
            </ul>
          </div>
        </article>
        <article className="grid grid-cols-3 gap-x-4 my-4">
          <div className="col-span-1">
            <H3>잇다헬스케어</H3>
            <p>개발팀 / 팀원</p>
            <p>2021.12 - 2022.08</p>
          </div>
          <div className="col-span-2">
            <H4>비대면 협진 서비스 개발</H4>
            <ul>
              <li>원격 진료 플랫폼 개발에 참여</li>
              <li>
                코드 리뷰와 문서화 작업에 적극 참여하여 팀 내 지식 공유 및 개발
                프로세스 개선에 기여하며, 이슈 트래킹과 프로젝트 관리를 위해
                Azure Boards 도입
              </li>
              <li>사용기술: React, TypeScript, MUI, Context API</li>
            </ul>
          </div>
        </article>
        <article className="grid grid-cols-3 gap-x-4 my-4">
          <div className="col-span-1">
            <H3>엘리스</H3>
            <p>프론트엔드 코치</p>
            <p>2021.09 - 2021.10</p>
          </div>
          <div className="col-span-2">
            <H4>코딩 부트캠프 프론트엔드 강의 제작</H4>
            <ul>
              <li>
                HTML, CSS, JavaScript, React, Redux에 대한 실습 강의를 진행
              </li>
              <li>
                교육생의 이해를 돕기 위해{' '}
                <a
                  href="https://etcz.notion.site/ELICE-d83443efe6334203811a669b27277825"
                  target="_blank"
                >
                  주제별 학습 자료를 제작
                </a>
                하고 공유해 학습 효과를 극대화
              </li>
              <li>
                코치 평가에서{' '}
                <a
                  href="https://docs.google.com/forms/d/1BoeeeXvR7RcqjwhxHe1Tto2pjJ9gN-fCuaaM1LmpLsI/viewanalytics"
                  target="_blank"
                >
                  직접 제작한 학습 자료와 강의 리딩 방식에 대해 높은 평가
                </a>
                를 받았으며, 최고 평점의 코치로 선정됨
              </li>
            </ul>
          </div>
        </article>
      </Section>
      <Section>
        <H2>education</H2>
        <article className="grid grid-cols-3 gap-x-4 my-4">
          <div className="col-span-1">
            <H3>중앙대학교</H3>
            <p>지식경영학부 졸업</p>
            <p>2015.03 - 2020.02</p>
          </div>
          <div className="col-span-2"></div>
        </article>
      </Section>
    </>
  );
}

function Section({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps>) {
  return (
    <section className={cn('mb-4 sm:mb-8', className)} {...props}>
      {children}
    </section>
  );
}

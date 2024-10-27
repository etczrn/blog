import { H1, H3, H4 } from '@/app/components/ui/typography';
import { Fragment, ReactNode } from 'react';
import {
  Block,
  Caption,
  Group,
  LeftSide,
  Link,
  RightSide,
  Section,
  Title,
} from './components/resume';

import { FlipWords } from '@/app/components/ui/flip-words';
import Image from 'next/image';
import { Contacts } from './components/contact';

export default function About() {
  return (
    <>
      <Section>
        <div className="relative mx-auto my-4 max-w-fit">
          <H1 className="inline-block px-2">김수연</H1>
          <Image
            src={'/me.jpg'}
            alt="My Photo"
            width={360}
            height={360}
            style={{
              maskImage: 'url(/organic-shape.svg)',
              maskRepeat: 'no-repeat',
              maskSize: '100% 100%',
              maskPosition: 'center',
            }}
            className="relative -mt-12 -z-10"
          />
          <Contacts className="justify-end -mt-6 sm:-mt-8" />
          <div className="px-2 mt-8 text-2xl sm:px-4">
            <span className="block">저는</span>
            <FlipWords words={WORDS} className="px-0 font-bold text-teal-400" />
            <span className="block">개발자입니다.</span>
          </div>
        </div>
      </Section>
      {/* TODO: 반복되는 거 없애기 */}
      <Section>
        <Title>work experience</Title>
        {WORK_EXPERIENCE.map(({ title, description, content }) => (
          <Block key={crypto.randomUUID()}>
            <LeftSide>
              <H3>{title}</H3>
              {description.map((d) => (
                <Caption key={crypto.randomUUID()}>{d}</Caption>
              ))}
            </LeftSide>
            {content && (
              <RightSide>
                {content.map(({ title, description }) => (
                  <Fragment key={crypto.randomUUID()}>
                    <H4>{title}</H4>
                    {description && (
                      <Group>
                        {description?.map((d) => (
                          <li key={crypto.randomUUID()}>{d}</li>
                        ))}
                      </Group>
                    )}
                  </Fragment>
                ))}
              </RightSide>
            )}
          </Block>
        ))}
      </Section>
      <Section>
        <Title>education</Title>
        {EDUCATION.map(({ title, description, content }) => (
          <Block key={crypto.randomUUID()}>
            <LeftSide>
              <H3>{title}</H3>
              {description.map((d) => (
                <Caption key={crypto.randomUUID()}>{d}</Caption>
              ))}
            </LeftSide>
            {content && (
              <RightSide>
                {content.map(({ title, description }) => (
                  <Fragment key={crypto.randomUUID()}>
                    <H4>{title}</H4>
                    {description && (
                      <Group>
                        {description?.map((d) => (
                          <li key={crypto.randomUUID()}>{d}</li>
                        ))}
                      </Group>
                    )}
                  </Fragment>
                ))}
              </RightSide>
            )}
          </Block>
        ))}
      </Section>
    </>
  );
}

const WORDS = [
  '베스트 프랙티스를 추구하는',
  '사용자 경험을 중요하게 생각하는',
  '읽기 쉬운 코드를 짜는',
];

type Content = {
  title: ReactNode;
  description: ReactNode[];
  content?: Partial<Pick<Content, 'title' | 'description'>>[];
};

const WORK_EXPERIENCE: Content[] = [
  {
    title: '(주)이제이엠컴퍼니',
    description: ['개발팀', '2024.11 - 현재'],
  },
  {
    title: 'Finddy Inc.',
    description: ['Tech lab. / 팀원', '2022.09 - 2024.10'],
    content: [
      {
        title: '어카운즈 어드민 시스템 개발',
        description: [
          '간편송금 앱 어카운즈의 어드민 서비스 웹 프론트엔드 개발 담당',
          '프로젝트 구조 설계, AWS 배포 및 CodePipeline을 통한 CI/CD 설정 수행',
          '유저 관리, 금융거래 내역 조회, 공지사항 관리 등 주요 기능 개발을 통해 서비스 운영 효율성 및 사용자 경험 개선에 기여',
          '최신 기술 도입과 유지보수성 향상을 위해 React Router v6를 Tanstack Router로 리팩토링하여 타입 안전성과 개발 생산성을 높임',
          '사용기술: React, TypeScript, MUI, React Query, Tanstack Router, Context API',
        ],
      },
      {
        title: (
          <>
            <Link href="https://accounz.io/">어카운즈 홈페이지</Link> 개발
          </>
        ),
        description: [
          '랜딩 페이지와 공지사항, FAQ, 이용약관 등 웹 프론트엔드 개발 담당',
          '사용자 인터랙션을 강화하기 위해 GSAP을 활용하여 애니메이션 구현하고 사용자 경험 향상',
          '사용기술: React, TypeScript, React Query, GSAP',
        ],
      },
    ],
  },
  {
    title: '잇다헬스케어',
    description: ['개발팀 / 팀원', '2021.12 - 2022.08'],
    content: [
      {
        title: '비대면 협진 서비스 개발',
        description: [
          '원격 진료 플랫폼 개발에 참여',
          '코드 리뷰와 문서화 작업에 적극 참여하여 팀 내 지식 공유 및 개발 프로세스 개선에 기여하며, 이슈 트래킹과 프로젝트 관리를 위해 Azure Boards 도입',
          '사용기술: React, TypeScript, MUI, Context API',
        ],
      },
    ],
  },
  {
    title: '엘리스',
    description: ['프론트엔드 코치', '2021.09 - 2021.10'],
    content: [
      {
        title: '코딩 부트캠프 프론트엔드 강의 제작',
        description: [
          'HTML, CSS, JavaScript, React, Redux에 대한 실습 강의를 진행',
          <>
            교육생의 이해를 돕기 위해{' '}
            <Link href="https://etcz.notion.site/ELICE-d83443efe6334203811a669b27277825">
              주제별 학습 자료를 제작
            </Link>
            하고 공유해 학습 효과를 극대화
          </>,
          <>
            코치 평가에서{' '}
            <Link href="https://docs.google.com/forms/d/1BoeeeXvR7RcqjwhxHe1Tto2pjJ9gN-fCuaaM1LmpLsI/viewanalytics">
              {' '}
              직접 제작한 학습 자료와 강의 리딩 방식에 대해 높은 평가
            </Link>
            를 받았으며, 최고 평점의 코치로 선정됨
          </>,
        ],
      },
    ],
  },
];

const EDUCATION: Content[] = [
  {
    title: '엘리스',
    description: ['2020.12 - 2021.06'],
    content: [
      {
        title: 'AI 트랙 1기 수료',
        description: [
          '6개월 동안 프론트, 백엔드, 머신러닝을 학습해 신입 개발자, 데이터분석가, 테크니컬 기획자가 되는 교육 과정',
          '기간 중 총 세개의 프로젝트를 진행함으로써 React와 JavaScript에 대해 학습',
        ],
      },
    ],
  },
  {
    title: '중앙대학교',
    description: ['2015.03 - 2020.02'],
    content: [{ title: '지식경영학부 졸업' }],
  },
];

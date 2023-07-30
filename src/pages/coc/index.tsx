import Content from "@/components/content";
import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "program"])),
  },
});

const COCSection = styled.section({
  marginBottom: 80,
});

export default function COCPage() {
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <div className='max-sm:p-4'>
          <h1>GopherCon Korea 2023 일반 참가자 행동강령</h1>
          <h2>핵심 규칙</h2>
          <COCSection>
            GopherCon Korea 2023 행사는 직장인 학생을 나누지 않고 다 함께 모여 네트워킹과 이벤트를 참여할 수 있는
            단체입니다. 행사가 참여자 모두에게 좋은 경험과 즐거움이 되길 바라며 이에 따라 아래와 같은 행동 강령을
            요청드립니다.
            <br />
            <br />
            행동강령은 GopherCon Korea 2023 행사의 모든 참여자에게 해당하며 위반 시 운영진, 스태프로 부터 퇴장 등의
            제재를 받을 수 있습니다. 또한, 행동강령 위반 사례에 대한 내용은 공개될 수 있습니다.
          </COCSection>
          <COCSection>
            <h3>친절과 배려로 따뜻하고 건전한 커뮤니티를 만들어갑니다.</h3>
            <ul>
              <li>우리는 혐오와 차별적인 표현, 공격적인 발언을 하지 않습니다.</li>
              <li>이와 관련한 문제를 발견했을 때 우리는 침묵하지 않으며, 먼저 나서서 문제를 해결합니다.</li>
              <li>관련된 구성원 모두가 행복하고 재미있는 자리가 되기 위해 최선을 다합니다.</li>
            </ul>
          </COCSection>
          <COCSection>
            <h3>더 나은 국내 Go 언어 커뮤니티 발전을 위해 책임과 소임을 다 합니다.</h3>
            <ul>
              <li>Go 언어를 사랑하는 우리들은 국내의 Go 언어 커뮤니티 발전을 위하여 최선을 다 합니다.</li>
            </ul>
          </COCSection>
          <h2>참여 규칙</h2>
          <COCSection>
            <h3>A) 일반</h3>
            <ol>
              <li>
                <b>행사에 오신 모든 분들이 환영한다는 느낌을 주세요.</b>
                <br />
                <ol>
                  <li>서로 아는 분들끼리 있기보다, 누구에게든 이야기를 함께 건네고 인사하고, 소통해 주세요.</li>
                  <li>행사 자리와 채널에서는 모든 상대방에게 존댓말을 사용해 주세요.</li>
                </ol>
              </li>
              <li>
                <b>모든 사람들이 안전하고 믿을 수 있는 커뮤니티라고 느낄 수 있도록 안전한 행사를 위해 노력해주세요.</b>
                <br />
                <ol>
                  <li>
                    <span>타인과 불필요한 신체 접촉을 하지 않도록 주의해 주세요.</span>
                    <ul>
                      <li>예시: 동의 없이 손을 잡거나 어깨동무를 하는 행위 등.</li>
                    </ul>
                  </li>
                  <li>
                    <span>대화에 욕설, 비속어, 은어를 포함하지 마세요.</span>
                    <br />
                    <ul>
                      <li>가까운 지인과이 대화이더라도 주변 사람에게 불편함을 주거나 위협이 될 수 있습니다.</li>
                    </ul>
                  </li>
                  <li>화를 내거나 과격한 몸짓, 언성을 높이는 행위 등으로 상대방을 위협하지 마세요.</li>
                  <li>
                    상대방이 불쾌감을 느낄 수 있는 언어적 표현, 비언어적 행동, 일체의 성적 대상화를 하지 말아주세요.
                  </li>
                  <li>
                    <span>타인에게 위해를 가하거나 이에 준하는 공포감을 심어줄 수 있는 물건을 소지하지 마세요.</span>
                    <br />
                    <ul>
                      <li>야구 배트, 화학 물품류, 화기 등</li>
                    </ul>
                  </li>
                  <li>
                    <span>타인의 소지품을 동의 없이 만지지 말아주세요.</span>
                    <br />
                    <ul>
                      <li>휴대폰, 노트북, 가방 등</li>
                      <li>장애인 보조 기구(보청기, 휠체어 등)</li>
                    </ul>
                  </li>
                  <li>법에 저촉되는 행위를 하지 말아주세요.</li>
                  <li>위의 모든 행위를 부추기거나 장려하는 행위를 하지 말아주세요.</li>
                  <li>준비위원회로 사칭하거나 허위 정보를 유포하지 말아 주세요.</li>
                </ol>
              </li>
              <li>
                <b>상대방을 존중하며 커뮤니케이션 해주세요.</b>
                <br />
                <ol>
                  <li>
                    <span>
                      항상 상대방을 존중하는 언행을 합니다. 상대방에게 불편할 수 있는 언행이나 차별적인 언행을 하지
                      말아주세요.
                    </span>
                    <ul>
                      <li>&quot;비전공자면 이런 내용 모르시겠네요&quot;</li>
                      <li>&quot;OO 언어는 뒤쳐졌거나 레거시라 싫어요&quot;</li>
                    </ul>
                  </li>
                  <li>행사 자리와 채널에서는 모든 상대방에게 존댓말을 사용하고 &quot;XX님 체&quot;를 사용합니다.</li>
                  <li>궁금한 점이 있다면 적극적으로 물어보고, 다른 의견이 있다면 제시해봅니다.</li>
                  <li>
                    <span>사적인 정보를 지켜주세요. 사소한 질문도 누군가에게는 큰 실례가 되기도 합니다.</span>
                    <br />
                    <ul>
                      <li>&quot;나이가 어떻게 되시나요?&quot;</li>
                      <li>
                        &quot;결혼은 하셨나요?&quot;, &quot;아이가 있으신가요?&quot;, &quot;애인이 있으신가요?&quot;
                      </li>
                      <li>&quot;어떻게 하다가 장애를 가지게 되셨나요? &quot;</li>
                    </ul>
                  </li>
                  <li>타인의 명시적인 허가 없이 무단으로 타인의 사진을 촬영하지 않습니다.</li>
                </ol>
              </li>
            </ol>
          </COCSection>
          <COCSection>
            <h3>B) 대응 및 조치</h3>
            <p>
              행사에 참여하며, 다른 참여자 분께 어떠한 문제가 발생하거나 다른 참여자 분께서 문제에 처한 것을 보셨거나,
              불편 사항이 있으시면 GopherCon Korea 준비위원회(이하 준비위)에게 도움을 요청해 주세요. 위급한 사항이라면
              준비위에게 도움을 청함과 동시에 경찰, 소방서 등 도움이 필요한 관할 기간에 신고하여 주세요.
            </p>
            <ul>
              <li>
                <b>
                  <u>대표 연락처: gophers.kr@gmail.com</u>
                </b>
              </li>
              <li>
                오프라인 공간에서 준비위는 준비위임을 인지할 수 있는 눈에 띄는 복장을 입고 있을 것입니다.
                <br />
                온라인 공간 혹은 대면으로 이야기할 수 없는 상태인 경우에는 상단의 메일을 통해 연락하실 수 있습니다.
              </li>
              <li>
                행동 강령 위반이 접수되면 GopherCon Korea 준비위원회는 필요한 경우 행사장 퇴장 등의 조치나 사법/의료
                기관에 연락을 취하여, 안전한 행사를 만들 수 있도록 노력하며, 이 과정에서의 신고자나 피해자의 신원 보호를
                위해 노력할 것입니다.
              </li>
              <li>
                또한 사법기관에서 필요한 조치를 취하실 수 있도록 GopherCon Korea 준비위원회는 모든 역할을 다할 것입니다.
              </li>
            </ul>
          </COCSection>
          <COCSection>
            <h3>C) 행동 강령에는 한계가 있습니다.</h3>
            <p>
              모두가 즐겁고 행복하고 안전하고 쾌적한 커뮤니티를 위한 다양한 노력에도 불구하고, 행동 강령이 모든
              위협으로부터 준비위원회/참가자 분들을 안전하게 보호할 수는 없습니다.
            </p>
            <ul>
              <li>
                누가봐도 위급한 상황이라면 스태프에게 도움을 청함과 동시에 경찰, 소방서 등 관할 기관에 신고하여 적절한
                조치가 될 수 있도록 해 주세요.
              </li>
              <li>
                사실 확인이 어려운 경우 심증만으로 피신고자나 단체에 조치를 취하기는 어렵습니다. 조치 여부와 관계없이
                위협을 느끼신다면 동행, 분리 등의 도움을 드릴 수 있습니다.
              </li>
            </ul>
          </COCSection>
          <COCSection>
            <h3>4) 끝으로</h3>
            <b>
              <u>
                GopherCon Korea 2023 운영위원회에서는 모든 행사 참석자가 위의 행동강령을 지켜주시기를 강력히 요청합니다.
              </u>
            </b>
            <p>GopherCon Korea 2023에서 위와 같은 행동 강령을 어길 시에는 준비위원회에 의하여</p>
            <ul>
              <li>주의 조치</li>
              <li>다른 참가자와의 격리 조치</li>
              <li>행사장 퇴장 조치</li>
              <li>사법기관으로의 인도 조치</li>
            </ul>
            혹은 위에 언급되지 않았으나 필요한 조치가 이루어질 수 있음을 공지드립니다.
          </COCSection>
        </div>
      </Content>
    </Layout>
  );
}

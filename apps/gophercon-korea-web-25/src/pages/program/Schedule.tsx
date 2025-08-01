import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import { schedule, Session, sessions } from "@/data/program";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiBarChart2Line, RiInformationLine, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Schedule = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "program" });
  const lang = i18n.language.startsWith("ko") ? "ko" : "en";

  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const difficulties = ["All", ...Array.from(new Set(sessions.map((s) => s.difficulty[lang])))];
  const categories = ["All", ...Array.from(new Set(sessions.map((s) => s.category[lang])))];
  const categoryColors = theme.colors.category;

  const getSessionById = (id: string): Session | undefined => sessions.find((s) => s.id === id);

  const filteredSchedule = schedule.filter((item) => {
    if (item.type === "break") return true;
    const session = getSessionById(item.sessionId!);
    if (!session) return false;

    const difficultyMatch = difficultyFilter === "All" || session.difficulty[lang] === difficultyFilter;
    const categoryMatch = categoryFilter === "All" || session.category[lang] === categoryFilter;
    return difficultyMatch && categoryMatch;
  });

  return (
    <PageContainer>
      <Seo title={t("schedule_title")} description={t("placeholder_notice_content")} />
      <PageTitle>{t("schedule_title")}</PageTitle>

      <Notice>
        <RiInformationLine size={24} />
        <NoticeContent>
          <h4>{t("placeholder_notice_title")}</h4>
          <p>{t("placeholder_notice_content")}</p>
        </NoticeContent>
      </Notice>

      <ControlsContainer>
        <FilterContainer>
          <FilterGroup>
            <label>{t("filter_by_difficulty")}</label>
            <select onChange={(e) => setDifficultyFilter(e.target.value)} value={difficultyFilter}>
              {difficulties.map((d) => (
                <option key={d} value={d}>
                  {d === "All" ? t("all") : d}
                </option>
              ))}
            </select>
          </FilterGroup>
          <FilterGroup>
            <label>{t("filter_by_category")}</label>
            <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? t("all") : c}
                </option>
              ))}
            </select>
          </FilterGroup>
        </FilterContainer>

        <Legend>
          <h4>{t("legend")}</h4>
          <LegendItems>
            {Object.keys(categoryColors).map((key) => (
              <LegendItem key={key}>
                <LegendColorBox $color={(categoryColors as any)[key]} />
                <span>{sessions.find((s) => s.category.en.toLowerCase() === key)?.category[lang] || key}</span>
              </LegendItem>
            ))}
            <LegendItem>
              <LegendColorBox $color={theme.colors.border} />
              <span>{t("break")}</span>
            </LegendItem>
          </LegendItems>
        </Legend>
      </ControlsContainer>

      <Timeline>
        {filteredSchedule.map((item, index) => {
          const session = item.sessionId ? getSessionById(item.sessionId) : undefined;
          const categoryKey = session?.category.en.toLowerCase() || "break";

          const contentNode = (
            <Content category={categoryKey}>
              <h4>{session ? session.title[lang] : item.title[lang]}</h4>
              {session && (
                <>
                  <p>{session.description[lang]}</p>
                  <Meta>
                    <span>
                      <RiUserLine /> {session.speaker.name[lang]}
                    </span>
                    <span>
                      <RiBarChart2Line /> {session.difficulty[lang]}
                    </span>
                  </Meta>
                </>
              )}
            </Content>
          );

          return (
            <TimelineItem key={index} type={item.type} category={categoryKey}>
              <Time>{item.time}</Time>
              <Line>
                <Dot category={categoryKey} />
              </Line>
              {session ? <ContentLink to={`/program/sessions/${session.id}`}>{contentNode}</ContentLink> : contentNode}
            </TimelineItem>
          );
        })}
      </Timeline>
    </PageContainer>
  );
};

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NoticeContent = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.6;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  label {
    font-weight: 500;
  }
  select {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: white;
  }
`;

const Legend = styled.div`
  h4 {
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
`;

const LegendItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const LegendColorBox = styled.div<{ $color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
`;

const Timeline = styled.div`
  position: relative;
`;

const TimelineItem = styled.div<{ type: "session" | "break"; category: string }>`
  display: grid;
  grid-template-columns: 100px 40px 1fr;
  align-items: start;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 70px 20px 1fr;
    gap: 0.5rem;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${({ theme, type, category }) =>
      type === "session" ? (theme.colors.category as any)[category] : theme.colors.textSecondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h4 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ type }) =>
    type === "break" &&
    `
    color: #868e96;
    h4 { color: #495057; }
  `}
`;

const Time = styled.div`
  font-weight: 500;
  text-align: right;
  padding-top: 0.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const Line = styled.div`
  position: relative;
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.border};
  justify-self: center;
`;

const Dot = styled.div<{ category: string }>`
  position: absolute;
  top: 0.4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid ${({ theme, category }) => (theme.colors.category as any)[category] || theme.colors.border};
`;

const Content = styled.div<{ category: string }>`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }

  transition: ${({ theme }) => theme.transition};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-2px);
  }
  border-left: 5px solid ${({ theme, category }) => (theme.colors.category as any)[category] || theme.colors.border};
`;

const ContentLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Meta = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Schedule;

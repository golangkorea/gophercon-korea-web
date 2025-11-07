import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import { Session, sessions } from "@/data/program";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiBarChart2Line, RiMapPin2Line, RiTimeLine, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sessions = () => {
  const { t, i18n, ready } = useTranslation(undefined, { keyPrefix: "program" });
  const lang = i18n.language.startsWith("ko") ? "ko" : "en";

  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const difficulties = ready ? ["All", ...Array.from(new Set(sessions.map((s: Session) => s.difficulty[lang])))] : ["All"];
  const categories = ready ? ["All", ...Array.from(new Set(sessions.map((s: Session) => s.category[lang])))] : ["All"];

  const categoryColors: { [key: string]: string } = {
    general: "#5a67d8",
    communication: "#38a169",
    framework: "#d53f8c",
    testing: "#dd6b20",
    concurrency: "#007d9c",
  };

  const filteredSessions = sessions.filter((session: Session) => {
    const difficultyMatch = difficultyFilter === "All" || session.difficulty[lang] === difficultyFilter;
    const categoryMatch = categoryFilter === "All" || session.category[lang] === categoryFilter;
    return difficultyMatch && categoryMatch;
  });

  return (
    <PageContainer>
      <Seo title={t("sessions_title")} />
      <PageTitle>{t("sessions_title")}</PageTitle>

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

      <SessionGrid>
        {filteredSessions.map((session) => (
          <SessionCardLink key={session.id} to={`/program/sessions/${session.id}`}>
            <SessionCard>
              <CardHeader>
                <CategoryLabel color={categoryColors[session.category.en.toLowerCase()]}>{session.category[lang]}</CategoryLabel>
                <h3>{session.title[lang]}</h3>
              </CardHeader>
              <p>{session.description[lang] || t("description_placeholder")}</p>
              <CardFooter>
                <SpeakerInfo>
                  <RiUserLine /> {session.speaker.name[lang]} ({session.speaker.company[lang]})
                </SpeakerInfo>
                <MetaGrid>
                  <Tag>
                    <RiTimeLine /> {session.time}
                  </Tag>
                  <Tag>
                    <RiMapPin2Line /> {session.track[lang]}
                  </Tag>
                  <Tag>
                    <RiBarChart2Line /> {session.difficulty[lang]}
                  </Tag>
                </MetaGrid>
              </CardFooter>
            </SessionCard>
          </SessionCardLink>
        ))}
      </SessionGrid>
    </PageContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
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
    transition: border-color 0.2s;
    background-color: white;
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SessionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const SessionCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SessionCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  display: flex;
  flex-direction: column;
  p {
    flex-grow: 1;
    margin: 1rem 0;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const CardHeader = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 0.5rem;
  }
`;

const CategoryLabel = styled.span<{ color?: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background-color: ${({ color, theme }) => color || theme.colors.primary};
`;

const CardFooter = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SpeakerInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MetaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Sessions;

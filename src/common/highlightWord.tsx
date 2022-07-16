import styled from 'styled-components';

import colors from '@constants/colors';

const MatchedWord = styled.span`
  color: ${colors.blue};
`;

const highlightWord = (string: string, word: string) => {
  const matchedWordRegex = new RegExp(
    `(?<front>.+)?(?<matchedWord>${word})(?<back>.+)?`,
  );
  const matched = string.match(matchedWordRegex);
  if (!matched || !matched.groups) return <span>{string}</span>;

  const { front, matchedWord, back } = matched.groups;

  return matchedWord ? (
    <>
      {front ? <span>{front}</span> : null}
      <MatchedWord>{matchedWord}</MatchedWord>
      {back ? <span>{back}</span> : null}
    </>
  ) : (
    <span>string</span>
  );
};

export default highlightWord;

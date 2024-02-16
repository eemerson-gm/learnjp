import { Questions } from './extra/Questions';
import { useQuestions } from './extra/QuestionsContext';
import { QuestionsProvider } from './extra/QuestionsContext';
import { Start } from './extra/Start';

const Learn = () => {
  const { step } = useQuestions();

  switch (step) {
    case 'start':
      return <Start />;
    case 'questions':
      return <Questions />;
    default:
      return <></>;
  }
};

const Wrapper = () => {
  return (
    <QuestionsProvider>
      <Learn />
    </QuestionsProvider>
  );
};

export { Wrapper as Learn };

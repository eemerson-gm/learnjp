import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { KanaType } from '../../../data/Hiragana';

interface Question {
  question: string;
  hint: string;
  answer: string;
}

interface QuestionsContextProps {
  step: 'start' | 'questions' | 'finish';
  question: Question;
  setStep: React.Dispatch<
    React.SetStateAction<'start' | 'questions' | 'finish'>
  >;
  resetQuestions: (alphabet: KanaType[]) => void;
  nextQuestion: () => void;
}

const QuestionsContext = createContext<QuestionsContextProps | null>(null);

const QuestionsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [index, setIndex] = useState<number>(0);
  const [step, setStep] = useState<'start' | 'questions' | 'finish'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);

  const shuffleArray = <T,>(array: T[]) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const resetQuestions = (alphabet: KanaType[]) => {
    console.log(alphabet);
    const newQuestions = shuffleArray(alphabet)
      .filter((value) => value.roumaji.length)
      .map((value) => ({
        question: value.kana,
        hint: value.roumaji[0] + '_'.repeat(value.roumaji.length - 1),
        answer: value.roumaji,
      })) as Question[];
    setQuestions(newQuestions);
    setIndex(0);
  };

  const nextQuestion = () => {
    const nextIndex = index + 1;
    if (nextIndex > questions.length - 1) {
      setStep('finish');
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <QuestionsContext.Provider
      value={{
        step,
        question: questions[index],
        setStep,
        resetQuestions,
        nextQuestion,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

const useQuestions = () => {
  const questionsContext = useContext(QuestionsContext);
  if (questionsContext === null) {
    throw Error('Questions context is not provided');
  }
  return questionsContext;
};

export { QuestionsProvider, useQuestions };

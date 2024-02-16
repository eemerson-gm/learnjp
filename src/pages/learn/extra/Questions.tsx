import { Input } from '@nextui-org/react';
import { useQuestions } from './QuestionsContext';
import { Title } from '../../../components/Title';
import { useState } from 'react';

const Questions = () => {
  const { question } = useQuestions();
  const [answer, setAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const handleAnswer = () => {
    if (!isAnswered) setIsAnswered(true);
  };

  return (
    <>
      <Title>{question.question}</Title>
      <h2 className='text-xl text-center font-bold m-4'>{question.hint}</h2>
      <div className='flex flex-row justify-center gap-4'>
        <Input
          value={answer}
          placeholder='Enter your answer here...'
          isInvalid={isAnswered ? answer !== question.answer : undefined}
          onKeyDown={handleAnswer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
    </>
  );
};

export { Questions };

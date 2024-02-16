import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import { Hiragana, KanaType } from '../../../data/Hiragana';
import { useQuestions } from './QuestionsContext';
import { Title } from '../../../components/Title';
import { Katakana } from '../../../data/Katakana';

const Start = () => {
  const { resetQuestions, setStep } = useQuestions();

  const onStart = (alphabet: KanaType[]) => {
    setStep('questions');
    resetQuestions(alphabet);
  };

  return (
    <>
      <Title>Select Alphabet</Title>
      <Card>
        <CardBody className='flex flex-col gap-4'>
          <Button onClick={() => onStart(Hiragana)}>Hiragana</Button>
          <Button onClick={() => onStart(Katakana)}>Katakana</Button>
        </CardBody>
        <CardFooter>
          <div className='flex flex-col gap-4'>
            <RadioGroup label='Select Difficulty' orientation='horizontal'>
              <Radio value='easy'>Easy</Radio>
              <Radio value='medium'>Medium</Radio>
              <Radio value='hard'>Hard</Radio>
            </RadioGroup>
            <CheckboxGroup label='Select Types' orientation='horizontal'>
              <Checkbox value='gojuuon'>Gojuuon</Checkbox>
              <Checkbox value='gojuuon'>Gojuuon</Checkbox>
              <Checkbox value='gojuuon'>Gojuuon</Checkbox>
              <Checkbox value='gojuuon'>Gojuuon</Checkbox>
            </CheckboxGroup>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export { Start };

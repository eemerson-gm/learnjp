import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { Hiragana } from '../../data/Hiragana';
import { Katakana } from '../../data/Katakana';

const Kanji = () => {
  return (
    <>
      <Tabs>
        <Tab key='hiragana' title='Hiragana'>
          <Card>
            <CardBody className='flex flex-row flex-wrap justify-center'>
              {Hiragana.map((kana) => (
                <div
                  key={kana.kana}
                  className='bg-content2 w-16 p-4 text-center'
                >
                  <div>{kana.kana}</div>
                  <div>{kana.roumaji}</div>
                </div>
              ))}
            </CardBody>
          </Card>
        </Tab>
        <Tab key='katakana' title='Katakana'>
          <Card>
            <CardBody className='flex flex-row flex-wrap justify-center'>
              {Katakana.map((kana) => (
                <div
                  key={kana.kana}
                  className='bg-content2 w-16 p-4 text-center'
                >
                  <div>{kana.kana}</div>
                  <div>{kana.roumaji}</div>
                </div>
              ))}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
};

export { Kanji };

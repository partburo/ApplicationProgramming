// 4_8_5  Implement a staggering movement
/*
  В этом примере хук usePointerPosition() отслеживает текущую позицию указателя. Попробуйте переместить курсор или палец по области предварительного просмотра и увидите, как красная точка следует за вашим движением. Ее положение сохраняется в переменной pos1.

  На самом деле, в данный момент отображается пять (!) различных красных точек. Вы не видите их, потому что в настоящее время все они отображаются в одном и том же положении. Это то, что вам нужно исправить. Вместо этого вы хотите реализовать "ступенчатое" движение: каждая точка должна "следовать" по пути предыдущей точки. Например, если вы быстро перемещаете курсор, первая точка должна следовать за ним немедленно, вторая точка должна следовать за первой с небольшой задержкой, третья точка должна следовать за второй и так далее.

  Вам необходимо реализовать пользовательский хук useDelayedValue. Его текущая реализация возвращает предоставленное ему value. Вместо этого вы хотите возвращать значение, полученное от delay миллисекунды назад. Для этого вам может понадобиться некоторое состояние и Эффект.

  После реализации useDelayedValue, вы должны увидеть, как точки движутся друг за другом.
*/

import { useEffect, useRef, useState } from 'react';
import { usePointerPosition } from './usePointerPosition.ts';

type Position = { x: number, y: number };

function useDelayedValue(value: Position, delay: number) {
  // TODO: Implement this Hook
  const [delayedValue, setDelayedValue] = useState<Position>(value)
  const queue = useRef<{ value: Position; timeStamp: number }[]>([])

  useEffect(() => {
    let dateNow = Date.now()
    queue.current.push({ value, timeStamp: dateNow })

    let interval = setInterval(() => {
      while (
        queue.current. length &&
        dateNow - queue.current[0].timeStamp >= delay
      ) {        
        let item = queue.current.shift()
        if (item) {
          setDelayedValue(item.value)
        }
      }
    }, 1)

    return () => clearInterval(interval)
  }, [value, delay])

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot(
  { position, opacity }:
    { position: Position, opacity: number }
) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}


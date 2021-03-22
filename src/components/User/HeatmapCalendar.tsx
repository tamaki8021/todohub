import React, { useState, useEffect } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip'
import { db } from '../../firebase/index'
import { store } from '../../reducks/store/store'

type TodoValue = {
  date: any,
  count: number | null
}[]

const HeatmapCalendar = () => {
  const uid = store.getState().user.uid
  const valuesArray: TodoValue = []
  const [values, setValues] = useState<TodoValue>([])


  useEffect(() => {
    //firestoreからtodoのcompleted_atとevalutionの取得
    const unsub = async() => {
      await db.collection('users').doc(uid).collection('todos').get().then((doc) => {
      doc.docs.forEach((snapshot) => {
        const data = snapshot.data()

        const completed_at: any = data.completed_at
        const evaluation: number = data.evaluation
        const newcount = valuesArray.find((d) => {
          //同じ日付のカウントをプラス
          if(d.date === completed_at) {
            let sumcount = d.count! + evaluation
            return d.count = sumcount
          }
        })

        const valuesData =  newcount ? newcount :{date: completed_at, count: evaluation } 
        
        valuesArray.push(valuesData)
      })
      
      //重複dateの削除
      const setValuesArray = valuesArray.filter((value, index, self) => self.indexOf(value) === index)

      console.log(valuesArray);
      console.log(setValuesArray);
      
      
      setValues(setValuesArray)
    })}
    
    unsub()
  }, [])


  const getLastMonthDate = () => {
    const today = new Date();
    today.setMonth( today.getMonth() - 5 );
    return today
  };


  const getTooltipDataAttrs = (value: any) => {
    // Configuration for react-tooltip
    return {
      'data-tip': `${value.date} has count: ${value.count}`,
    };
  };
  
  
  return (
    <div>
      <CalendarHeatmap
        startDate={getLastMonthDate()}
        endDate={new Date()}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-gitlab-${value.count}`;
        }}
        tooltipDataAttrs={getTooltipDataAttrs}
      />
      <ReactTooltip />
    </div>
  );
}

export default HeatmapCalendar

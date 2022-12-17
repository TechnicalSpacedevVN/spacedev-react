import React from 'react'
import { useId } from 'react'
import { useRef, useEffect, useState } from 'react'
import { Input } from '../components/Input'
import { useForm } from '@/hooks/useForm'
import Button from '@/components/Button'
import { useMemo } from 'react'

const fibonaci = (n) => {
    console.log('expensiveCalculation')
    if(n < 3) return 1
    return fibonaci(n - 2) + fibonaci(n - 1)
}

export const DemoReact = () => {
    const [render, renderCount] = useState(0)
    useEffect(() => {
        const timerId = setInterval(() => {
            renderCount(render => render + 1)
        }, 100)
        return () => {
            clearInterval(timerId)
        }
    }, [])


    const [count, setCount] = useState(0)

    const value = useMemo(() => fibonaci(count), [count])

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">Số lần render: {render}</h2>
                Count: {count} <br />
                Fibonaci: {value} <br />
                <Button onClick={() => setCount(count + 1)}>+1</Button>
            </section>
        </main>
    )
}

/**
 * memo: memorize 1 component, khi props thay đổi thì component re-render
 * 
 * equalFun: Hàm so sánh, return true nếu newProps === oldProps và không re-render
 * Sử dụng equalFun khi chỉ muốn component re-render trong một vài props thay đổi
 */

/**
 * useMemo: memorize value sau khi được tính toán phức tạp
 * 
 * Khi chúng ta có một logic tính toán phức tạp tốn nhiều tài nguyên, mỗi lần component re-render làm cho việc tính toán đc thực thi lại
 * thì sử dụng useMemo để cache giá trị tính toán đó lại
 * 
 * Khi re-render xẩy ra, giá trị chỉ được tính toán lại khi có sự thay đổi của dependencyList
 */
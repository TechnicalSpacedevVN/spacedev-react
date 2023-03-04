import Button from '@/components/Button'
import Field from '@/components/Field'
// import { useAuth } from '@/context/AuthContext'
import { useAsync } from '@/hooks/useAsync'
import { useAuth } from '@/hooks/useAuth'
import { useForm } from '@/hooks/useForm'
import { userService } from '@/services/user.service'
import { authActions } from '@/stores/authReducer'
import { handleError } from '@/utils/handleError'
import { regexp, required } from '@/utils/validate'
import { message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Profile() {

    const dispatch = useDispatch()
    const { user } = useAuth()
    const { loading, excute: updateInfoService } = useAsync(userService.updateInfo)
    const { register, values, validate } = useForm({
        name: [
            required()
        ],
        phone: [
            required(),
            regexp('phone')
        ],
        fb: [
            required(),
            regexp('url')
        ]
    }, user)

    const onSubmit = async () => {
        try {
            if(validate()) {
                const res = await updateInfoService(values)
                console.log(res)
                // setUser(res.data)
                dispatch(authActions.setUser(res.data))
                message.success('Bạn đã cập nhật thông tin tài khoản thành công')
            }
        } catch (err) {
            handleError(err)
        }
    }

    return (
        <div className="tab1">
            <Field {...register('name')} placeholder="Nguyễn Văn A" label="Họ và tên" required/>
            <Field {...register('phone')} placeholder="0949******" label="Số điện thoại" required/>
            <Field {...register('username')} disabled label="Email"/>
            <Field {...register('fb')} placeholder="Facebook url" label="Facebook" required />
           
            <Button loading={loading} onClick={onSubmit}>LƯU LẠI</Button>
        </div>
    )
}

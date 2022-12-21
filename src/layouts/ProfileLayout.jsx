import React, { Suspense } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { PATH } from '../config/path'
// import { useAuth } from '../context/AuthContext'
import { avatarDefault } from '../config'
import { useAuth } from '@/hooks/useAuth'

export default function ProfileLayout() {
    const { user } = useAuth()


    return (
        <div className="profile">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar ? user.avatar : avatarDefault} alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team Spacedev1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink end to={PATH.profile.index} >Thông tin tài khoản</NavLink>
                            <NavLink to={PATH.profile.course}>Khóa học của bạn</NavLink>
                            <NavLink to={PATH.profile.project}>Dự án đã làm</NavLink>
                            <NavLink to={PATH.profile.payment}>Lịch sử thanh toán</NavLink>
                            <NavLink to={PATH.profile.coin}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Suspense fallback={<div>Profile loading....</div>}>
                                <Outlet />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

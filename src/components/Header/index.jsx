import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PATH } from '../../config/path'

export default function Header() {
    const { pathname } = useLocation()
    const onOpenMenu = () => {
        document.body.classList.add('menu-is-show')
    }

    const onCloseMenu = () => {
        document.body.classList.remove('menu-is-show')
    }

    useEffect(() => {
        onCloseMenu()
    }, [pathname])


    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={onOpenMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to={PATH.home} className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>Spacedev</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <Link to={PATH.profile.index} className="info">
                                    <div className="name">Đặng Thuyền Vương</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                                <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                                <Link to="#">Đăng xuất</Link>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to={PATH.signin}>Đăng ký / Đăng nhập</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.home}>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.team}>Spacedev Team</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.course}>Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.project}>Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.contact}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={onCloseMenu} />
        </>
    )
}
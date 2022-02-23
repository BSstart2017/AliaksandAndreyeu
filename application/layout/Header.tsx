import {FC, ReactNode} from "react";
import {Layout, Menu} from "antd";

const Header: FC<PropsType> = ({children}) => {
    return (
        <Layout>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            {children}
        </Layout>
    )
}

export default Header

type PropsType = {
    children : ReactNode
}
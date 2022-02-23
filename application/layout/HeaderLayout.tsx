import {FC, ReactNode, useMemo} from "react"
import {Col, Layout, Menu, Row} from "antd"
import Link from 'next/link'
import {GithubOutlined, LinkedinOutlined, MailOutlined} from "@ant-design/icons";

const itemsValue: string[] = ['home', 'portfolio', 'workExperience', 'languageSkills', 'aboutMe', 'hobby', 'contacts']

const HeaderLayout: FC<PropsType> = ({children}) => {

    const itemsMenu = itemsValue.map(item => (
            <Menu.Item key={item}>
                <Link href={`/${item !== 'home' ? item : ''}`}>
                    <a>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                </Link>
            </Menu.Item>
        )
    )

    return (
        <Layout>
            <Row className="header" justify="center" align="middle" style={{backgroundColor: '#001529'}}>
                <Col span={4} style={{textAlign: "center", color: "white", fontWeight: 'bold', fontStyle: 'italic'}}>
                    <span>Aliaksandr Andreyeu</span>
                </Col>
                <Col span={15}>
                    <Menu theme="dark" mode="horizontal" style={{justifyContent: "center"}} defaultSelectedKeys={['home']}>
                        {itemsMenu}
                    </Menu>
                </Col>
                <Col span={5}>
                    <Link href='/f'>
                        <a style={{paddingRight: 10, color: 'white'}}><LinkedinOutlined/></a>
                    </Link>
                    <Link href='/f'>
                        <a style={{paddingRight: 10, color: 'white'}}><GithubOutlined /></a>
                    </Link>
                    <Link href='/f'>
                        <a style={{paddingRight: 10, color: 'white'}}><MailOutlined /></a>
                    </Link>
                    <Link href='/f'>
                        <a style={{color: 'white'}}>Download CV</a>
                    </Link>
                </Col>
            </Row>
            {children}
        </Layout>
    )
}

export default HeaderLayout

type PropsType = {
    children: ReactNode
}
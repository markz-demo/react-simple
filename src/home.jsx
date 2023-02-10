import { useState } from 'react'
import classNames from 'classnames'
import './home.less'
import styles from './home.module.less'
import test_big from '@images/test-big.jpg'
import test_small from '@images/test-small.jpg'
import { Button1, Button2, Col, Container, Row, utils } from 'common-ui'

export default function Home() {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount(count + 1)
    }
    const onUtilsClick = () => {
        utils.test('home')
    }
    return (
        <div>
            <h2 className="home-div">Hello World!{count}</h2>
            <button onClick={onClick}>count increase</button>
            <Container title="CSS Modules">
                <div className={styles.c1}>styles.c1</div>

                <div className={styles.list}>
                    {[1, 2, 3].map((item, i) => (
                        <div key={i} className={classNames(styles.item, { [styles.disabled]: item == 2 })}>{item}</div>
                    ))}
                </div>

                <div className={classNames('font-bold m-16', styles.c2)}>
                    styles.c2
                    <Button1 />
                </div>

                <div style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(styles, null, 2)}</div>
            </Container>
            <Container title="common components">
                <button onClick={onUtilsClick}>trigger common utils</button>
                <div className="mt-16">
                    <Button1 />
                    <Button2 />
                </div>
                <div className="mt-16">
                    <Row>
                        <Col>
                            <div className="border">col1</div>
                        </Col>
                        <Col>
                            <div className="border">col2</div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container title="images">
                <img alt="test" src={test_small} />
                <img alt="test" src={test_big} />
            </Container>
        </div>
    )
}
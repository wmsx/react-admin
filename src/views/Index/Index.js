import { Layout, Row, Col } from 'antd'
import React from 'react'

class Index extends React.Component {

  render() {
    return (
      <Layout>
        <Row gutter={24}>
          <Col span={6}>
            <div>
              首页
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Index
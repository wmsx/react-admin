import React from 'react'
import { HomeOutlined, FolderOpenOutlined } from '@ant-design/icons';

const menu = [
  {
      key: '/index',
      title: '首页',
      icon: <HomeOutlined />,
      auth: [1]
  },
  {
    key: '/post-manage',
    title: '帖子管理',
    icon: <FolderOpenOutlined />,
    auth: [1],
    subs: [
      { key: '/post-manage/list', title: '稿件管理',},
      { key: '/post-manage/new', title: '投稿',}
    ]
},
  
]

export default menu

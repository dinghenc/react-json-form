import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

import FormRender, {useForm} from 'form-render';
import {Button, Divider, Flex, Space, Typography} from 'antd';
import schema from './schema/simple';
import detail from "./detail";
import {AlertTwoTone, BugTwoTone, BulbTwoTone} from "@ant-design/icons";

export default () => {
    const form = useForm();

    const onFinish = (formData: any) => {
        console.log('formData:', formData);
    };

    const [posts, setPosts] = useState('123');
    const [requestSchema, setRequestSchema] = useState(schema)

    useEffect(() => {
        fetch('http://localhost:8999/', {
            method: 'GET'
        })
            .then((res) => res.text())
            .then((data) => {
                console.log(data);
                setPosts(data);
                schema['properties']['fr-lbvk']['items']['properties']['fr-ft3a']['props']['options'][0]['label'] = data;
                setRequestSchema(schema);
                form.setValues({
                    'fr-lbvk': [{
                        'fr-ft3a': 'B',
                        'fr-9i0a': {'fr-j82x': [{'fr-gdsv': 'A'}]}
                    }, {'fr-ft3a': 'A'}]
                })
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const rowStyle = {
        display: "flex",
        justifyContent:"center"
    };

    return (
        <div style={{width: "50%", textAlign: "center", margin: "auto"}}>
            <div style={rowStyle}>
                <h1><BulbTwoTone />&nbsp;</h1>
                <h1>This is a simple form system</h1>
            </div>
            <pre>
              {posts}
            </pre>
            <br/>
            <div>
                <div style={{width: "100%"}}>
                    <Divider orientation="left">
                        <div style={rowStyle}>
                            <h2><AlertTwoTone />&nbsp;</h2>
                            <h2>1. Next is some detail</h2>
                        </div>
                    </Divider>

                    <div style={{textAlign: "left"}}>
                        <Typography>
                            <pre>{detail}</pre>
                        </Typography>
                        <div style={{textAlign: "center"}}>
                            <Space wrap>
                                <Button type="primary" shape="circle">👍</Button>
                                <Button type="primary" shape="circle" danger>👎</Button>
                            </Space>
                        </div>
                    </div>
                    <br/>
                </div>
                <div style={{width: "100%"}}>
                    <Divider orientation="left">
                        <div style={rowStyle}>
                            <h2><BugTwoTone />&nbsp;</h2>
                            <h2>2. Next is some select</h2>
                        </div>
                    </Divider>
                    <div style={{textAlign: "left",}}>
                        <FormRender
                            form={form}
                            schema={requestSchema}
                            onFinish={onFinish}
                            maxWidth={360}
                            footer={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

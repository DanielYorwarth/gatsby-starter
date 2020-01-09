import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Post = (props) => (
    <artical>
        <div className="p-3">
            <Card>
                <Card.Img alt={props.alt} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
                    <Card.text>
                        <div dangerouslySetInnerHTML={{__html: props.excerpt}} />
                    </Card.text>
                    <Button variant="primary" href={props.readMore}>Read More</Button>
                </Card.Body>
            </Card>
        </div>
    </artical>
)

export default Post
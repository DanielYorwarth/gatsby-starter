import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Post = (props) => (
    <artical>
        <div className="p-3">
            <Card>
                <Card.Img alt={props.alt || "default"} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{__html: props.excerpt}} />
                    </Card.Text>
                    <Button variant="primary" href={props.readMore}>Read More</Button>
                </Card.Body>
            </Card>
        </div>
    </artical>
)

export default Post
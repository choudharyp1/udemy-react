import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today 5:00PM"
                    text="Hey buddy"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Tom"
                    timeAgo="Yesterday 11:00PM"
                    text="looking good"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Matt"
                    timeAgo="Tuesday 9:00PM"
                    text="whats up man?"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector('#root'))
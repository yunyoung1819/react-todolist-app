import React, {Component, Fragment} from 'react';
import del from "./delete.png";
import PropTypes from "prop-types";
import SFC from "./SFC";

class TodoContents extends Component {
    static propTypes = {
        todoItems : PropTypes.arrayOf(PropTypes.string.isRequired),
        completeCount: PropTypes.number.isRequired,
        onTodoComplete: PropTypes.func.isRequired,
        onTodoRemove: PropTypes.func.isRequired,
    }
    static defaultProps = {
        completeCount: 0,
    }

    render() {
        const { todoItems, completeCount, onTodoComplete, onTodoRemove } = this.props;
        return (
            <Fragment>
                <div className="todo_content">
                    <ul className="todo_myList">
                        {(todoItems && todoItems.length)
                            ? todoItems.map((val, index) =>
                                    <li className="fix" key={`${val}-${index}`}>
                                        <input type="checkbox"
                                               className="check"
                                               onClick={()=>onTodoComplete(val)}
                                        />
                                        <span>{` ${val} `}</span>
                                        <img src={del} className="delCheck" onClick={() => onTodoRemove(val)}/>
                                    </li>)
                                    :
                                    <SFC value="할 일을 추가하세요." />
                        }
                    </ul>
                </div>
                <p>완료 수 : {completeCount} </p>
            </Fragment>
        );
    }
}

export default TodoContents;
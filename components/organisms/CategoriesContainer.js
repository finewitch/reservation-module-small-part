import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SingleNews from '../molecules/SingleNews'

class CategoriesContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.news.map((news) => {
                    return <SingleNews key={news.id} type={news.news_type} title={news.title} img={news.img} date={news.date} brief={news.brief} url={news.url}/>
                })}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        news: state.news.list ? state.news.list : []
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
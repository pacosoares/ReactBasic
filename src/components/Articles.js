import 'h8k-components';
import React from 'react';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            articles: this.props.articles
        };
        this.mostRecent = this.mostRecent.bind(this);
        this.mostUpvoted = this.mostUpvoted.bind(this);

    }

    render() {
        const title = "Sorting Articles";
        return (
            <div class="card w-50 mx-auto">
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                </div>
                <button
                    data-testid="most-recent-link"
                    className='small'
                    onClick={() => this.mostUpvoted()}>
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="small"
                    onClick={() => this.mostRecent()}>
                    Most Recent
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upvotes</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.articles.map(article => (
                            <tr data-testid="article" key={`article-${this.state.slideIndex}`}>
                                <td data-testid="article-title">{article.title}</td>
                                <td data-testid="article-upvotes">{article.upvotes}</td>
                                <td data-testid="article-date">{article.date}</td>
                            </tr>
                        ))}
                        <div data-testid="articles1" className="card text-center">
                            <h1 data-testid="title"></h1>
                            <p data-testid="upvotes"></p>
                        </div>
                    </tbody>
                </table>
            </div>
        );
    }

    mostRecent() {
        let articles = [...this.state.articles]; // Faz uma cópia do array original
        articles.sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordena a cópia
        this.setState({ articles: articles }); // Atualiza o estado com o array ordenado
    }

    mostUpvoted() {
        let articles = [...this.state.articles];
        articles.sort((a, b) => b.upvotes - a.upvotes);
        this.setState({ articles: articles });
    }

}

export default Articles;

import React, { PureComponent } from "react";
import ReactPaginate from "react-paginate";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { referData } from "../data";
import { alignProperty } from "@mui/material/styles/cssUtils";

class Cards extends PureComponent {
  constructor(props) {
    console.log("props", props);
    console.log("data", props.data);
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: this.props.card,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    console.log("mount");
    this.getData();
  }

  getData() {
    const data = this.props.data;
    console.log(data);

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: this.props.data,
      tableData: slice,
    });
  }

  render() {
    return (
      <>
        <Grid
          container
          spacing={3}
          sx={{
            backgroundColor: "#E6F5E9 ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {this.state.tableData.map((tdata, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              sx={{
                padding: 10,
                // background: "#E6F5E9",

                margin: 1,
                height: "auto",
                marginBottom: -10,
              }}
            >
              <Link to={`/topic/${this.state.tableData[i].slug}`}>
                <div className="card-container">
                  <div className="img-container">
                    <img src={this.state.tableData[i].image} alt="image" />
                  </div>
                  <div className="text-container">
                    <div className="top">
                      <span>
                        Date:
                        {new Date(
                          this.state.tableData[i].createdAt
                        ).toLocaleDateString()}
                      </span>
                      <span>{this.state.tableData[i].category}</span>
                    </div>
                    <div className="bottom">
                      <h4>{this.state.tableData[i].title}</h4>
                      <p style={{ marginTop: 20 }}>
                        {this.state.tableData[i].description.substring(0, 50)}
                        ...
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={`/topic/${this.state.tableData[i].slug}`}
                style={{ textAlign: "end" }}
              >
                <div
                  id="read-btn"
                  style={{
                    marginTop: -15,
                    width: 91,
                    textAlign: "center",
                    marginLeft: 280,
                    padding: "6px 10px",
                    color: "rgba(0, 0, 0, 0.7)",
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                  }}
                >
                  Read More
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Pagination  */}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </>
    );
  }
}

export default Cards;

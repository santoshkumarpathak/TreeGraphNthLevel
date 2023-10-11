import React from 'react'
import Tree from 'react-d3-tree'
import { useCenteredTree } from './helper';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const containerStyles = {
    width: "100vw",
    height: "100vh"
};

const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps
}) => (
    <g>
        <circle r={15}></circle>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
            {console.log(`nodeDatum ${nodeDatum},
    toggleNode ${toggleNode},
    foreignObjectProps ${foreignObjectProps}`)}
            {/* <Container fluid>
                <Row>
                    <Col className="" sm='4' md='4' lg='4'>
                        <Card className="card-profile shadow">
                            <Col className="bg-gradient-danger hyKFOX range-slider-value" sm='12' md='12' lg='12'>
                                map
                            </Col>
                            <Row className="justify-content-around mt--5">
                                <Col className="order-lg-2 text-center" lg="3">
                                    <div className="bg-gradient-white d-flex flex-column justify-content-around profileCard rounded-circle shadow text-green">
                                       
                                        <span className="display-2">A</span>
                                    </div>
                                </Col>
                            </Row>

                            <CardBody className="pt-0"
                                style={{ minHeight: "45vh", maxHeight: "100vh" }}
                            >
                                <Row>
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center ">
                                            <div>
                                                <span className="heading">22</span>
                                                <span className="description">B-Party</span>
                                            </div>
                                            <div>
                                                <span className="heading">
                                                    {false ? (
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="text-center">
                                                                    <div className="spinner-border" role="status">
                                                                        <span className="sr-only">Loading...</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        10
                                                    )}
                                                </span>
                                                <span className="description">Device</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description">Suspected</span>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                                <div className="text-center">
                                    <h3>
                                        9874563210 ( Vikram Patidar )
                                        <span className="font-weight-light">, 26 </span>
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        01/10/2023 - 20/20/2023
                                    </div>
                                    <div className="h5">
                                        <i className="ni business_briefcase-24 mr-2" />
                                        Relationer Name - Name will relationer
                                    </div>
                                    <div>
                                        <i className="ni education_hat mr-2" />
                                        Alternate no. - 9874563210
                                    </div>
                                    <hr className="my-4" />
                                    <p>    <i className="fa fa-map-marker pr-2"></i>
                                        MRS.UMA SAHU W/O BHUPENDRA SAHU  PLOT NO-182 & 183  PART OF SURVEY NO. 1825/1  APNA NAGAR COLONY  AGAR ROAD  TEHSIL & DISTRICT-UJJAIN (MP) MOB-9575516049
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container> */}
            <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
                <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
                {nodeDatum.children && (
                    <button style={{ width: "100%" }} onClick={toggleNode}>
                        {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
                    </button>
                )}
            </div>
        </foreignObject>
    </g>
);


export const Family = () => {

    const orgChart = {
        name: 'CEO',
        children: [
            {
                name: 'Manager',
                attributes: {
                    department: 'Production',
                },
                children: [
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Fabrication',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                ],
            },
        ],
    };

    const [translate, containerRef] = useCenteredTree();
    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

    return (
        <>

            <div>Family</div>
            <div style={containerStyles} ref={containerRef}>

                <Tree

                    data={orgChart}
                    translate={translate}
                    nodeSize={nodeSize}
                    renderCustomNodeElement={(rd3tProps) =>
                        renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                    }
                    orientation="vertical"
                >

                </Tree>
            </div>
        </>
    )
}

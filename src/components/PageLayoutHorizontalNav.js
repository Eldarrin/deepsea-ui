import React from 'react';
import {
    Avatar,
    BackgroundImage,
    BackgroundImageSrc,
    Brand,
    Button,
    ButtonVariant,
    Card,
    CardBody,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownSeparator,
    Gallery,
    GalleryItem,
    Grid,
    KebabToggle,
    Nav,
    NavItem,
    NavList,
    NavVariants,
    Page,
    PageHeader,
    PageSection,
    PageSectionVariants,
    TextContent,
    Text,
    Toolbar,
    ToolbarGroup,
    ToolbarItem, TextVariants, GridItem
} from '@patternfly/react-core';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens';
// make sure you've installed @patternfly/patternfly-next
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import brandImg from './brand_logo_white.svg'; // './l_pf-reverse-164x11.png';
import avatarImg from './avatar.png';

import DashboardBottomSection from './Dashboard';
import SimpleModal from './SimpleModal';
import SimpleChart from "./SimpleChart";
import SimpleTable from './SimpleTable';
import {ChartTheme} from "@patternfly/react-charts";
//import PageTopSectionEnrolment from './PageTopSectionEnrolment';

class PageTopSectionEnrolment extends React.Component {
    render () {
        return (
            <PageSection variant={PageSectionVariants.light}>
                <Grid>
                    <GridItem lg={6}>
                        <TextContent>
                            <Text component="h1">Enrolment <b>Short Bank</b></Text>
                        </TextContent>
                    </GridItem>
                    <GridItem lg={6}>
                        <TextContent>
                            <div style={{textAlign: "right"}}>
                                <SimpleModal/>
                            </div>
                        </TextContent>
                    </GridItem>
                </Grid>

            </PageSection>
        )
    }
}

class PageTopSection extends React.Component {
    render () {
        return (
            <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                    <Text component="h1">Dashboard</Text>
                    <Text component="p">
                        Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                        of it’s relative line height of 1.5.
                    </Text>
                </TextContent>
            </PageSection>
        )
    }
}

class TestAPI extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                pictures: [],
            };
        }

        componentDidMount() {
            fetch('https://randomuser.me/api/?results=5')
              .then(results => {
                  return results.json();
              }).then(data => {
                  let pictures = data.results.map((pic) => {
                      return(
                        <div key={pic.results}>
                            <img src={pic.picture.medium} />
                        </div>
                      )
                  })
                this.setState({pictures: pictures});
                  console.log("state", this.state.pictures);
            })
        }

        render() {
                  return (
                    <div className="container2">
                        <div className="container1">
                            {this.state.pictures}
                        </div>
                    </div>
                  )
        }
}

class PageBottomSectionEnrolment extends React.Component {
        render() {
            let chartDataToday = [{ x: 'Premium', y: 155 }];
            chartDataToday.push({ x: 'Standard', y: 125 });
            chartDataToday.push({ x: 'Basic', y: 35 });
            let chartDataThisMonth = [{ x: 'Premium', y: 3055 }];
            chartDataThisMonth.push({ x: 'Standard', y: 1525 });
            chartDataThisMonth.push({ x: 'Basic', y: 375 });
            return (
            <PageSection>
                <Grid gutter="md">
                    <GridItem lg={1}>
                        <SimpleChart isLegend={true} clientName={"Short Bank"} title={"Today"}/>
                    </GridItem>
                    <GridItem lg={2}>
                        <SimpleChart chartData={chartDataToday} clientName={"Short Bank"} title={"Today"}/>
                    </GridItem>
                    <GridItem lg={2}>
                        <SimpleChart chartData={chartDataThisMonth} clientName={"Short Bank"} title={"This Month"}/>
                    </GridItem>
                    <GridItem lg={1}/>
                    <GridItem lg={6}>
                        <TestAPI/>
                    </GridItem>
                </Grid>
            </PageSection>
            )
        }
}


class PageLayoutHorizontalNav extends React.Component {
    constructor(props) {
        super(props);
        // Set initial isNavOpen state based on window width
        const isNavOpen = typeof window !== 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10);
        this.state = {
            isDropdownOpen: false,
            isKebabDropdownOpen: false,
            activeItem: 0,
            isNavOpen
        };
    }

    onDropdownToggle = isDropdownOpen => {
        this.setState({
            isDropdownOpen
        });
    };

    onDropdownSelect = event => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    };

    onKebabDropdownToggle = isKebabDropdownOpen => {
        this.setState({
            isKebabDropdownOpen
        });
    };

    onKebabDropdownSelect = event => {
        this.setState({
            isKebabDropdownOpen: !this.state.isKebabDropdownOpen
        });
    };

    onNavSelect = result => {
        this.setState({
            activeItem: result.itemId
        });
    };

    onNavToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };

    render() {
        const { isDropdownOpen, isKebabDropdownOpen, activeItem, isNavOpen } = this.state;

        const PageNav = (
            <Nav onSelect={this.onNavSelect} aria-label="Nav">
                <NavList variant={NavVariants.horizontal}>
                    <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
                        Dashboard
                    </NavItem>
                    <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
                        Policy
                    </NavItem>
                    <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
                        Claim
                    </NavItem>
                    <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
                        Actuarial
                    </NavItem>
                    <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
                        Other
                    </NavItem>
                </NavList>
            </Nav>
        );
        const kebabDropdownItems = [
            <DropdownItem>
                <BellIcon /> Notifications
            </DropdownItem>,
            <DropdownItem>
                <CogIcon /> Settings
            </DropdownItem>
        ];
        const userDropdownItems = [
            <DropdownItem>Link</DropdownItem>,
            <DropdownItem component="button">Action</DropdownItem>,
            <DropdownItem isDisabled>Disabled Link</DropdownItem>,
            <DropdownItem isDisabled component="button">
                Disabled Action
            </DropdownItem>,
            <DropdownSeparator />,
            <DropdownItem>Separated Link</DropdownItem>,
            <DropdownItem component="button">Sign Out</DropdownItem>
        ];
        const PageToolbar = (
            <Toolbar>
                <ToolbarGroup className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnLg)}>
                    <ToolbarItem>
                        <Button id="horizontal-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
                            <BellIcon />
                        </Button>
                    </ToolbarItem>
                    <ToolbarItem>
                        <Button id="horizontal-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
                            <CogIcon />
                        </Button>
                    </ToolbarItem>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
                        <Dropdown
                            isPlain
                            position="right"
                            onSelect={this.onKebabDropdownSelect}
                            toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                            isOpen={isKebabDropdownOpen}
                            dropdownItems={kebabDropdownItems}
                        />
                    </ToolbarItem>
                    <ToolbarItem className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnMd)}>
                        <Dropdown
                            isPlain
                            position="right"
                            onSelect={this.onDropdownSelect}
                            isOpen={isDropdownOpen}
                            toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Andy Ward</DropdownToggle>}
                            dropdownItems={userDropdownItems}
                        />
                    </ToolbarItem>
                </ToolbarGroup>
            </Toolbar>
        );
        const bgImages = {
            [BackgroundImageSrc.lg]: '/images/deepsea_1200.jpg',
            [BackgroundImageSrc.sm]: '/images/deepsea_768.jpg',
            [BackgroundImageSrc.sm2x]: '/images/deepsea_768.jpg',
            [BackgroundImageSrc.xs]: '/images/deepsea_567.jpg',
            [BackgroundImageSrc.xs2x]: '/images/deepsea_567.jpg',
            [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
        };

        const Header = (
            <PageHeader
                logo={<Brand src={brandImg} alt="Deepsea Logo" />}
                toolbar={PageToolbar}
                avatar={<Avatar src={avatarImg} alt="Andy Ward" />}
                topNav={PageNav}
            />
        );

        return (
            <React.Fragment>
                <BackgroundImage src={bgImages} />
                <Page header={Header}>


                    <PageTopSectionEnrolment/>
                    <PageBottomSectionEnrolment/>

                </Page>
            </React.Fragment>
        );
    }
}

export default PageLayoutHorizontalNav;
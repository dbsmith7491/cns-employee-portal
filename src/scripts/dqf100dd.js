export default function generateDQF100DD(appData) {
    
    let firstTableValueSet = [
        {
            label: "APPLICANT'S NAME\n",
            value: appData.firstName + " " + appData.lastName
        },
        {
            label: "POSITION APPLIED FOR\n",
            value: appData.appliedFor
        },
        {
            label: "CURRENT STREET ADDRESS\n",
            value: appData.currentAddress
        },
        {
            label: "CITY\n",
            value: appData.currentCity
        },
        {
            label: "STATE\n",
            value: appData.currentState
        },
        {
            label: "ZIP\n",
            value: appData.currentZip
        },
        {
            label: "DRIVER'S LICENSE NO.\n",
            value: appData.driversLicenseNumber
        },
        {
            label: "DRIVER'S LICENSE STATE\n",
            value: appData.driversLicenseState
        },
        {
            label: "DATE OF BIRTH\n",
            value: appData.birthDate
        },
        {
            label: "EMAIL ADDRESS\n",
            value: appData.email
        },
        {
            label: "TELEPHONE\n",
            value: appData.telephone
        },
        {
            label: "SOCIAL SECURITY\n",
            value: appData.ssnNumber
        },
        {
            label: "HAVE YOU WORKED FOR THIS COMPANY BEFORE?\n",
            value: appData.workedHereBefore
        },
        {
            label: "IF YES, FROM DATE?\n",
            value: appData.workedFrom
        },
        {
            label: "IF YES, TO DATE?\n",
            value: appData.workedTo
        }
    ];
    
    function threeColumnGrid(items) {
        var returnList = [];
        for (var i = 0; i < items.length; i += 3) {
            let row = [];
            for (var j = 0; j < 3; j++) {
                row.push({
                    text: [
                        {
                            text: items[i + j].label,
                            style: "label"
                        },
                        { text: items[i + j].value, style: "input" }
                    ]
                });
            }
            returnList.push(row);
        }
    
        returnList.push(
            [
                {
                    text: [
                        {
                            text: "IF YES, REASON FOR LEAVING\n",
                            style: "label"
                        },
                        {
                            text: appData.reasonForLeaving,
                            style: "input"
                        }
                    ],
                    colSpan: 3
                },
                {},
                {}
            ],
            [
                {
                    text: [
                        {
                            text: "HOW DID YOU HEAR OF THIS POSITION\n",
                            style: "label"
                        },
                        {
                            text: appData.howDidYouHear,
                            style: "input"
                        }
                    ],
                    colSpan: 3
                },
                {},
                {}
            ],
            [
                {
                    text: [
                        {
                            text:
                                "IS THERE ANY REASON YOU WON’T BE ABLE TO PERFORM THE FUNCTIONS OF THE JOB WHICH YOU HAVE APPLIED (AS DESCRIBED IN THE ATTACHED JOB DESCRIPTION) IF YES, EXPLAIN IF YOU WISH.\n",
                            style: "label"
                        },
                        {
                            text: appData.jobPerformanceIssues,
                            style: "input"
                        }
                    ],
                    colSpan: 3
                },
                {},
                {}
            ]
        );
    
        return returnList;
    }
    
    function previousAddressTable() {
        let returnTable = [];
        for (var i = 0; i < 6; i++) {
            const p = appData.previousAddresses[i];
            if (p) {
                returnTable.push([
                    { text: p.previousAddress },
                    { text: p.previousCity },
                    { text: p.previousState },
                    { text: p.previousZip },
                    { text: p.previousLength }
                ]);
            } else {
                returnTable.push([{}, {}, {}, {}, {}]);
            }
        }
        return returnTable;
    }
    
    function accidentTable() {
        let returnTable = [];
        for (var i = 0; i < 3; i++) {
            const a = appData.accidentRecords[i];
            if (a) {
                returnTable.push([
                    { text: a.accidentDate },
                    { text: a.accidentType },
                    { text: a.fatalities },
                    { text: a.injuries },
                    { text: a.hazMatSpill }
                ]);
            } else {
                returnTable.push([{}, {}, {}, {}, {}]);
            }
        }
        return returnTable;
    }
    
    function violationTable() {
        let returnTable = [];
        for (var i = 0; i < 6; i++) {
            const v = appData.violationRecords[i];
            if (v) {
                returnTable.push([
                    { text: v.violationDate },
                    { text: `${v.violationCity}, ${v.violationState}` },
                    { text: v.violation },
                    { text: v.violationVehicleType }
                ]);
            } else {
                returnTable.push([{}, {}, {}, {}]);
            }
        }
        return returnTable;
    }
    
    function previousEmployers() {
        let employersTables = [];
        for (var i = 0; i < 10; i++) {
            const hasIndex = Boolean(appData.previousEmployers.length > i);
            const d = appData.previousEmployers[i];
    
            employersTables.push({
                style: "tableExample",
                table: {
                    widths: ["*", 100, 75, 75],
                    margin: [5, 5, 5, 5],
                    heights: [10, 10, 20, 20, 20, 20, 20, 20, 20],
                    body: [
                        [
                            {
                                text: "Employer Record",
                                fontSize: 8,
                                colSpan: 4
                            },
                            {},
                            {},
                            {}
                        ],
                        [
                            {
                                text: [
                                    {
                                        text: "Name\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerName
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "USDOT#\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex ? d.previousEmployerDOT : "",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "Start Date\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex ? d.previousDateFrom : "",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "End Date\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex ? d.previousDateTo : "",
                                        style: "input"
                                    }
                                ]
                            }
                        ],
                        [
                            {
                                text: [
                                    {
                                        text: "Address\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerAddress
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "City\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerCity
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "State\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerState
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "Zip\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerZip
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            }
                        ],
                        [
                            {
                                text: [
                                    {
                                        text: "Position Held\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex ? d.previousPosition : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "Salary\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex ? d.previousSalary : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "Reason for Leaving\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousReasonForLeaving
                                            : "\n",
                                        style: "input"
                                    }
                                ],
                                colSpan: 2
                            },
                            {}
                        ],
                        [
                            {
                                text: [
                                    {
                                        text: "Contact Name\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerContact
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "Contact Phone\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerPhone
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text: "Contact Email\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousEmployerEmail
                                            : "\n",
                                        style: "input"
                                    }
                                ],
                                colSpan: 2
                            },
                            {}
                        ],
                        [
                            {
                                text: [
                                    {
                                        text:
                                            "Were you subject to the FMCSR while employed?\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex
                                            ? d.previousFMCSRSubject
                                            : "\n",
                                        style: "input"
                                    }
                                ]
                            },
                            {
                                text: [
                                    {
                                        text:
                                            "Was your position safety sensitive requiring part 40 drug and alcohol testing?\n",
                                        style: "label"
                                    },
                                    {
                                        text: hasIndex ? d.previousPart40DA : "\n",
                                        style: "input"
                                    }
                                ],
                                colSpan: 3
                            },
                            {},
                            {}
                        ]
                    ]
                }
            });
        }
        return employersTables;
    }
    
    function qualificationsTable() {
        let returnTable = [];
        for (var i = 0; i < 5; i++) {
            const q = appData.qualifications[i];
            if (q) {
                const endorsements = [
                    q.endorsementNone ? "None" : "",
                    q.endorsementT ? "T" : "",
                    q.endorsementP ? "P" : "",
                    q.endorsementN ? "N" : "",
                    q.endorsementH ? "H" : "",
                    q.endorsementX ? "X" : "",
                    q.endorsementS ? "S" : ""
                ]
                    .filter((el) => el !== "")
                    .join(" , ");
    
                const restrictions = [
                    q.restrictionNone ? "None" : "",
                    q.restrictionL ? "L" : "",
                    q.restrictionZ ? "Z" : "",
                    q.restrictionE ? "E" : "",
                    q.restrictionO ? "O" : "",
                    q.restrictionM ? "M" : "",
                    q.restrictionN ? "N" : "",
                    q.restrictionV ? "V" : ""
                ]
                    .filter((el) => el !== "")
                    .join(" , ");
    
                returnTable.push([
                    { text: q.qualificationState },
                    { text: q.qualificationLicenseType },
                    { text: endorsements },
                    { text: restrictions },
                    { text: q.qualificationExpirationDate }
                ]);
            } else {
                returnTable.push([{}, {}, {}, {}, {}]);
            }
        }
        return returnTable;
    }
    
    function drivingExperienceTable() {
        let returnTable = [];
        for (var i = 0; i < 6; i++) {
            const e = appData.drivingExperiences[i];
            if (e) {
                returnTable.push([
                    { text: e.equipmentClass },
                    { text: e.type },
                    { text: e.years }
                ]);
            } else {
                returnTable.push([{}, {}, {}]);
            }
        }
        return returnTable;
    }
    
    const docDefinition = {
        content: [
            {
                alignment: "center",
                text: ["Driver’s Application for Employment", " | DQF 100"],
                style: "header",
                fontSize: 24,
                bold: true,
                margin: [0, 10, 10, 10]
            },
            { text: "Company Name", alignment: "center", fontSize: 16 },
            { text: "Street", alignment: "center", fontSize: 16 },
            {
                text: "City, State Zip",
                alignment: "center",
                fontSize: 16,
                margin: [0, 0, 0, 10]
            },
            {
                text:
                    "In compliance with Federal and State equal employment opportunity laws, qualified applicants are considered for all positions without regard to race, religion, color, sex, national origin, age, marital status, non-job related disability, or any other protected group status.",
                italics: true,
                fontSize: 10,
                margin: [0, 0, 0, 10]
            },
            {
                style: "tableExample",
                table: {
                    margin: [2, 2, 2, 2],
                    widths: ["*", "*", "*"],
                    heights: [10, 10, 10, 10, 30, 10, 25],
                    headerRows: 0,
                    body: threeColumnGrid(firstTableValueSet)
                }
            },
            {
                text: "Previous Addresses for Last Three Years",
                alignment: "left",
                fontSize: 16
            },
            {
                style: "tableExample",
                table: {
                    widths: [150, 120, 50, 75, "*"],
                    margin: [5, 5, 5, 5],
                    heights: [10, 20, 20, 20, 20, 20, 20, 20],
                    body: [
                        [
                            {
                                text: "Street Address",
                                style: "label"
                            },
                            {
                                text: "City",
                                style: "label"
                            },
                            {
                                text: "State",
                                style: "label"
                            },
                            {
                                text: "Zip",
                                style: "label"
                            },
                            {
                                text: "Length",
                                style: "label"
                            }
                        ],
                        ...previousAddressTable()
                    ]
                }
            },
            {
                text:
                    "THIS FORM IS MADE AVAILABLE WITH THE UNDERSTANDING THAT CNS TRUCK LICENSING IS NOT ENGAGED IN RENDERING LEGAL, ACCOUNTING, OR OTHER PROFESSIONAL SERVICES. CNS TRUCK LICENSING ASSUMES NO RESPONSIBILITY FOR THE USE OF THIS FORM, OR ANY DECISION MADE BY AN EMPLOYER WHICH MAY VIOLATE LOCAL, STATE, OR FEDERAL LAWS.",
                italics: true,
                fontSize: 10,
                pageBreak: "after"
            },
            { text: "Employment History", alignment: "left", fontSize: 16 },
            {
                text:
                    "All applicants wishing to drive in interstate commerce must provide the following information on all employers during the preceding three years. You must give the same information for all employers for whom you have driven a commercial vehicle seven years prior to the initial three years (total of ten years employment record).",
                fontSize: 12,
                margin: [0, 10, 0, 20]
            },
            ...previousEmployers(),
            {
                text: "Accident Record",
                alignment: "left",
                fontSize: 16,
                pageBreak: "before"
            },
            {
                text:
                    "At a minimum, all applicants must provide records of any accidents they were involved in within the previous 3 years.",
                fontSize: 11,
                margin: [0, 10, 0, 20]
            },
            {
                columns: [
                    {
                        canvas: [
                            {
                                type: "polyline",
                                lineWidth: 1,
                                closePath: true,
                                points: [
                                    { x: 0, y: 0 },
                                    { x: 12, y: 0 },
                                    { x: 12, y: 12 },
                                    { x: 0, y: 12 }
                                ]
                            }
                        ],
                        width: 18
                    },
                    {
                        text:
                            "Applicant has not been involved in any accidents in the past 3 years."
                    }
                ],
                margin: [0, 0, 0, 10]
            },
            {
                text: appData.noAccidents3Year ? "√" : "",
                absolutePosition: { x: 42, y: 112 }
            },
            {
                style: "tableExample",
                table: {
                    widths: [70, "*", 50, 50, 50],
                    margin: [5, 5, 5, 5],
                    heights: [10, 20, 20, 20, 20, 20, 20, 20],
                    body: [
                        [
                            {
                                text: "Date",
                                style: "label"
                            },
                            {
                                text: "Type of Accident",
                                style: "label"
                            },
                            {
                                text: "Fatalities",
                                style: "label"
                            },
                            {
                                text: "Injuries",
                                style: "label"
                            },
                            {
                                text: "Hazmat Spill",
                                style: "label"
                            }
                        ],
                        ...accidentTable()
                    ]
                }
            },
            {
                text: "Violation Record",
                alignment: "left",
                fontSize: 16,
                margin: [0, 20, 0, 0]
            },
            {
                text:
                    "At a minimum, all applicants must provide records of any violation they received within the previous 3 years.",
                fontSize: 11,
                margin: [0, 10, 0, 20]
            },
            {
                columns: [
                    {
                        canvas: [
                            {
                                type: "polyline",
                                lineWidth: 1,
                                closePath: true,
                                points: [
                                    { x: 0, y: 0 },
                                    { x: 12, y: 0 },
                                    { x: 12, y: 12 },
                                    { x: 0, y: 12 }
                                ]
                            }
                        ],
                        width: 18
                    },
                    {
                        text:
                            "Applicant has not received any convictions or forfeitures in the past 3 years."
                    }
                ],
                margin: [0, 0, 0, 10]
            },
            {
                text: appData.noViolations3Year ? "√" : "",
                absolutePosition: { x: 42, y: 344 }
            },
            {
                style: "tableExample",
                table: {
                    widths: [70, 100, "*", 100],
                    margin: [5, 5, 5, 5],
                    heights: [10, 20, 20, 20, 20, 20, 20, 20],
                    body: [
                        [
                            {
                                text: "Date",
                                style: "label"
                            },
                            {
                                text: "Location",
                                style: "label"
                            },
                            {
                                text: "Offense",
                                style: "label"
                            },
                            {
                                text: "Vehicle Type Operated",
                                style: "label"
                            }
                        ],
                        ...violationTable()
                    ]
                }
            },
            {
                text: "Driver Experience & Qualifications",
                alignment: "left",
                fontSize: 16,
                margin: [0, 20, 0, 0]
            },
            {
                text:
                    "At a minimum, all applicants must provide all licenses and permits held within the previous 3 years.",
                fontSize: 11,
                margin: [0, 10, 0, 20]
            },
            {
                text: appData.noViolations3Year ? "√" : "",
                absolutePosition: { x: 42, y: 344 }
            },
            {
                style: "tableExample",
                table: {
                    widths: [70, 100, "*", "*", 100],
                    margin: [5, 5, 5, 5],
                    heights: [10, 20, 20, 20, 20, 20, 20, 20],
                    body: [
                        [
                            {
                                text: "State",
                                style: "label"
                            },
                            {
                                text: "License Type",
                                style: "label"
                            },
                            {
                                text: "Endorsements",
                                style: "label"
                            },
                            {
                                text: "Restrictions",
                                style: "label"
                            },
                            {
                                text: "Expiration Date",
                                style: "label"
                            }
                        ],
                        ...qualificationsTable()
                    ]
                }
            },
            {
                text: "Driver Experience",
                alignment: "left",
                fontSize: 16,
                margin: [0, 20, 0, 0]
            },
            {
                style: "tableExample",
                table: {
                    widths: ["*", 70, 100],
                    margin: [5, 5, 5, 5],
                    heights: [10, 20, 20, 20, 20, 20, 20, 20],
                    body: [
                        [
                            {
                                text: "Class of Equipment",
                                style: "label"
                            },
                            {
                                text: "Type",
                                style: "label"
                            },
                            {
                                text: "Years",
                                style: "label"
                            }
                        ],
                        ...drivingExperienceTable()
                    ]
                }
            }
        ],
        styles: {
            tableHeader: {
                bold: true,
                fontSize: 10
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            label: {
                fontSize: 7
            },
            input: {
                fontSize: 12,
                margin: 10
            }
        }
    };
    
    return docDefinition;

}
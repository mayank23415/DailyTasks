//Private Static Members 
class Developer{
    static #designation = "Developer";
    get designation() {
        return this.#designation;
    }
} 


class FrontendDeveloper extends Developer{
    #designationInfo;
    constructor(designationInfo) {
        super();
        this.#designationInfo = designationInfo;
    }

    get designationInfo() {
        return this.#designationInfo;
    }
}

let newEmployee = new FrontendDeveloper("React Specialist");
// console.log(newEmployee.designationInfo + " " +  newEmployee.designation); --> 
// This will throw type errorCannot read private member #designation from an 
// object whose class did not declare it


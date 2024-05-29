import { IndividualCustumer, EnterpriseCustumer } from "./custumer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
): IndividualCustumer => {
  return new IndividualCustumer(firstName, lastName, cpf);
};

const createEnterpriseCustumer = (
  name: string,
  cnpj: string
): EnterpriseCustumer => {
  return new EnterpriseCustumer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe("IndividualCustumer", () => {
  it("should have firstName and cpf", () => {
    const sut = createIndividualCustomer("Luiz", "Otavio", "333.333.333-33");
    expect(sut).toHaveProperty("firstName", "Luiz");
    expect(sut).toHaveProperty("lastName", "Otavio");
    expect(sut).toHaveProperty("cpf", "333.333.333-33");
  });

  it("should have methods to get name and idn for individual customers", () => {
    const sut = createIndividualCustomer("Luiz", "Otavio", "333.333.333-33");
    expect(sut.getName()).toBe("Luiz Otavio");
    expect(sut.getIDN()).toBe("333.333.333-33");
  });
});

describe("EnterpriseCustumer", () => {
  it("should have name and cnpj", () => {
    const sut = createEnterpriseCustumer("Udemy", "333");
    expect(sut).toHaveProperty("name", "Udemy");
    expect(sut).toHaveProperty("cnpj", "333");
  });

  it("should have methods to get name and idn for enterprise customers", () => {
    const sut = createEnterpriseCustumer("Udemy", "333");
    expect(sut.getName()).toBe("Udemy");
    expect(sut.getIDN()).toBe("333");
  });
});

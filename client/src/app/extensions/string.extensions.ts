declare global {
  interface String {
    toCamelCase(): string;
    capitalize(): string;
  }
}

String.prototype.toCamelCase = function (): string {
  return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.capitalize = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export {};

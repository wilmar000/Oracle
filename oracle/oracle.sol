pragma solidity 0.5.16;

contract Oracle {
    /// quote structure
    struct stock {
        uint256 price;
        uint256 volume;
    }
    /// quotes by symbol
    mapping(bytes4 => stock) stockQuote;

    /// Contract owner
    address oracleOwner;
    constructor() public {
        oracleOwner = msg.sender;
    }

    /// Set the value of a stock
    function setStock(bytes4 symbol, uint256 price, uint256 volume)
        public
        returns (uint256)
    {
        //    require (msg.sender === oracleOwner, “Only owner can set stock”);
        stockQuote[symbol].price = price;
        stockQuote[symbol].volume = volume;
    }

    /// Get the value of a stock
    function getStockPrice(bytes4 symbol) public view returns (uint256) {
        return stockQuote[symbol].price;
    }

    /// Get the value of volume traded for a stock
    function getStockVolume(bytes4 symbol) public view returns (uint256) {
        return stockQuote[symbol].volume;
    }
}

class Codec:
    def __init__(self):
        self.count = 0
        self.encodeTable = {}
        self.decodeTable = {}
        self.urlMiddle = "://"
        self.baseUrl = "http://tinyurl.com/"


    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        longUrl = longUrl.split(self.urlMiddle)
        myTuple = (longUrl[0], longUrl[1])

        if myTuple not in self.encodeTable:
            self.decodeTable[self.count] = myTuple
            self.encodeTable[myTuple] = self.count
            self.count += 1
        
            return self.baseUrl + str(self.count - 1)

        return self.baseUrl + str(self.encodeTable[myTuple])


    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        key = int(shortUrl.split(self.baseUrl)[1])
        return self.decodeTable[key][0] + self.urlMiddle + self.decodeTable[key][1]
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
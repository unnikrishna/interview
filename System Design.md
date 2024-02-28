## `Scalibility`

## `Horzontail vs Vertical`

`Single server` design will have a single point of failure

`Vertical Scaling` is a instead of adding more server we will upgrade the single server, will be really expensive and single point of failure

`Horizontal Scaling` is adding more server into the sysytem, we can use load balancer to handle the traffic.

`state-less` approch is something like subsquent request should not depend on something that stored on previous request

`Cold StandBy` is where in vertical scaling we will take perodic backup some where and when out server fails we will reroute the request to a backed up DB.

`Warm StandBy` as same as above but we contantly replicated the data into a server only and use it when one is in failure

 `Hot StandBy` wher we will have a backup and simuntenously we will write it into two data base
/////////////////////////////////////DATABASE/////////////////////////////////////

## `SHARDING` NoSQL
1. Shard is a horizontal partsion of your database
2. each shard will have a backup so not only scalability and resilience

example of NOSQL -> mongoDB, Cassandra, DynameDB(amazon cloud based)

`NORMALIZED DATA` will have seprate table for different data storage where we will join in and get the value

`DENORMALIZED DATA` where we will duplicate the data into a single table, will be easy to query and will help performance, 

///////

`DATA LAKE` is like throwing all the data into a text file like csv or json into a big distributed storage sysytem like amazon S3 

1. process like AMAZON GLUE will create a schema for the data
2. AMAZON Athena(serverless) can be use to query the data


`ACID` Compliance => deals with db rules
1. Atomicity -> where either transaction succeeds or the entire thing fails, we dont need partial data
2. Consistency -> consistently applying all database rules are enforced or entire transation is rolled back
3. Isolation -> No transaction is affected by another transaction that is still in progress
4. Durability: Once transcation is committedd, it stays even if the system craches immediately after


`CAP Theorem`
1. Consistency  -> be avaliable everytime
2. Availability -> any single point of failure
3. Partition torlerence -> scale up to any level

Consistence and avaliability -> MYSQL
Avalibility and Partition -> cassandra
Consistence and Partition -> mongo DB

`CACHING`
to scale and perform well
1. Caches is bascially horizontally scaled servers
2. web servers or application serveres will hash a request to a given server 
3. will be local to the application, which will help application with more reads
4. expiration policy of the cache, too long the data may go on stale
5. hotspot can be a problem
6. cold-start is also a problem where initially the cashe data is empty on instaill start, one solution is warm up cache with previous log

Evition policies for cache
1. LRU Lease reactntly used
2. LFU Least Frequently used
3. FIFO first in forst out

CACHING TECH
1. Memcached

    In mermory key/value store
    open source
2. Redis

    More feature
    snapshots, replication
    advance data structure
3. Ncache

    made for .NET, java, node



































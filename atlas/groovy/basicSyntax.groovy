//groovy comment
basicSyntax groovy
https://groovy-lang.org/syntax.html

https://library.adaptavist.com/search?library-content%5BsortBy%5D=library-content_copy_count

  // a standalone single line comment
println "hello" // a comment till the end of the line

/* a standalone multiline comment
   spanning two lines */
println "hello" /* a multiline comment starting
                   at the end of a statement */
println 1 /* one */ + 2 /* two */

/**
 * A Class description
 */
class Person {
    /** the name of the person */
    String name

    /**
     * Creates a greeting method for a certain person.
     *
     * @param otherPerson the person to greet
     * @return a greeting message
     */
    String greet(String otherPerson) {
       "Hello ${otherPerson}"
    }
}

/**@
 * Some class groovydoc for Foo
 */
class Foo {
    /**@
     * Some method groovydoc for bar
     */
    void bar() {
    }
}

#!/usr/bin/env groovy
println "Hello from the shebang line"


2. Keywords
Groovy has the following reserved keywords:

Table 1. Reserved Keywords
abstract

assert

break

case

catch

class

const

continue

def

default

do

else

enum

extends

final

finally

for

goto

if

implements

import

instanceof

interface

native

new

null

non-sealed

package

public

protected

private

return

static

strictfp

super

switch

synchronized

this

threadsafe

throw

throws

transient

try

while

  // reserved keywords can be used for method names if quoted
def "abstract"() { true }
// when calling such methods, the name must be qualified using "this."
this.abstract()


Table 2. Contextual Keywords
as

in

permits

record

sealed

trait

var

yields



